---
sidebar_position: 6
---

# Pipeline Overview

**This section is intended to help you monitor the health of your data pipelines and provide you with a way to investigate further.**

1. Once you have set up at least one pipeline in the orchestration section you will see it in the overview section. Each pipeline will be represented separately.

<img width="1465" alt="N5 1 ovrvwsect" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/c56e2733-09a4-42dc-8c8b-d6d187ab55f0" />

2. Each vertical bar represents a pipeline run. A green bar represents success. A yellow bar represents a successful run, but a failure in ancillary functions, for example in a 'DBT test'. A red line indicates that the pipeline run has failed.
3. To investigate further, hover over the bar, note the start time, and click on check logs.

<img width="1470" alt="N5 3) Overview+logs" src="https://github.com/DalgoT4D/dalgo_docs/assets/119285990/e09f3d8f-7f3c-47e1-bc5b-04dc4bea3410" />

4. This will take you to the orchestrate section, where you would need to select logs and check for logs corresponding to the start time of the relevant run. (ref. Step 8 in the orchestrate section above)
