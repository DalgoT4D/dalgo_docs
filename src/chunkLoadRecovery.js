const RETRY_FLAG = "dalgo_chunk_load_retry_once";

function shouldHandle(message) {
    if (!message) return false;
    return (
        message.includes("Loading chunk") ||
        message.includes("ChunkLoadError")
    );
}

function reloadOnce() {
    try {
        if (sessionStorage.getItem(RETRY_FLAG) === "1") {
            sessionStorage.removeItem(RETRY_FLAG);
            return;
        }
        sessionStorage.setItem(RETRY_FLAG, "1");
    } catch (_err) {
        // If storage is unavailable, still try a single reload.
    }
    window.location.reload();
}

if (typeof window !== "undefined") {
    window.addEventListener("error", (event) => {
        if (shouldHandle(String(event?.message || ""))) {
            reloadOnce();
        }
    });

    window.addEventListener("unhandledrejection", (event) => {
        const reasonMessage =
            typeof event?.reason === "string"
                ? event.reason
                : String(event?.reason?.message || "");
        if (shouldHandle(reasonMessage)) {
            reloadOnce();
        }
    });

    window.addEventListener("load", () => {
        try {
            sessionStorage.removeItem(RETRY_FLAG);
        } catch (_err) {
            // no-op
        }
    });
}
