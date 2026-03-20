---
sidebar_position: 10
---

# AI Data Analysis v0.1

**Dalgo's AI Data Analysis allows you to leverage AI and ask Dalgo questions about data that's stored in your warehouse. Explore a range of possibilities; generate quick insights on your data, learn more about the data quality of your dataset, or even summarise qualitative data!**

Prerequisite: You have to have your warehouse setup on Dalgo and the warehouse must contain some data.

[Video](https://github.com/user-attachments/assets/0b5cc6b9-ad73-4914-981c-86db35ed9ab0)

### Steps to use the feature
1. Navigate to AI Data Analysis in the left pane
2. Enter an SQL query to select the table that you want to analyse
3. Select the 'Summarise' prompt and build on it or enter a custom prompt.

<img width="1470" alt="Screenshot 2024-11-13 at 2 51 08 PM" src="https://github.com/user-attachments/assets/c3a5af64-f020-494d-922e-9b4e93f97801" />

4. Press submit and wait for the response to be generated.

<img width="1470" alt="Screenshot 2024-11-13 at 2 56 49 PM" src="https://github.com/user-attachments/assets/76892f33-6e2b-41da-994d-2074d15932ea" />

5. Iterate on your prompt or query to improve the output of your prompt.

<img width="1470" alt="Screenshot 2024-11-13 at 2 56 02 PM" src="https://github.com/user-attachments/assets/7584ea30-5238-4aa5-b773-7ed2b416a2c8" />

6. When you are satisfied with the output you can click on 'save as' to save the session so that you can access it again for future analyses.
7. Click on saved sessions to access previously saved sessions

<img width="1470" alt="Screenshot 2024-11-13 at 3 01 52 PM" src="https://github.com/user-attachments/assets/11305868-48e9-4748-8560-ebf30d0f2f19" />

8. You could also press the copy symbol to copy the response and paste it into a deck

<img width="1470" alt="Screenshot 2024-11-13 at 2 58 57 PM" src="https://github.com/user-attachments/assets/e99981d2-01a3-45f5-bb61-5b1d420ae5a4" />

9. You may choose to download your SQL query, prompt, and response as a csv by clicking on the download button.
10. If the response is unsatisfactory press the 'thumbs down' icon at the bottom right of the window and share your feedback with us.

<img width="1470" alt="Screenshot 2024-11-13 at 2 58 00 PM" src="https://github.com/user-attachments/assets/089169a5-0c94-4344-85a8-09039e0bdd22" />

### Troubleshooting and FAQs

1. If the response is not to your satisfaction then iterate on your prompt.
2. If the page is taking too long to generate a response then reload it and try a different prompt.
3. The output will not be representative of your entire dataset if your dataset is over 500 rows. This feature is currently limited to 500 rows of analysis.

### Tips and Best Practices
1. Give context on the data to the extent that you can
2. If your column names are not representative of the data in the column then you should mention the column name in your prompt. For example: If my column is named 'xyz' and the data in this column is the number of covid deaths per country. Then In my prompt I should mention to calculate total covid deaths from column 'xyz'
3. Mention if you want the data to be numbered, in bullets, or in a table and how many points or words you want the data in. This will help format and limit your response.
