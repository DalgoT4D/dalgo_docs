import React from "react";
import { Redirect } from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    const homeRedirectPath = String(
        siteConfig.customFields?.homeRedirectPath ?? "/docs/Getting%20Started/"
    );

    return <Redirect to={useBaseUrl(homeRedirectPath)} />;
}
