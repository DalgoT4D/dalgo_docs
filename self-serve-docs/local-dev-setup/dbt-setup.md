---
title: dbt setup
---

If you want a quick explanation of what dbt is and the commands you will use most often, see the [dbt cheat sheet](../learning-hub/dbt-cheat-sheet).

1. Go to your IDE   
2. Open the local folder containing your DBT code (configured in Github step)  
3. In the top menu, Go to Terminal-\>New Terminal  
4. Go to Inside the newly opened terminal at the bottom   
5. Create a virtual environment with command: python3 \-m venv myenv  
6. Activate your myenv virtual env(Win): .\\myenv\\Scripts\\activate  
7. You should see the terminal’s line like below reflecting your virtual env’s name (i.e. myenv)  
   ![Screenshot](./images/local-dev-setup-image10.png)  
8. Run command ‘pip install \-r requirements.txt’. This will install all necessary python libraries for coding. (list mentioned in the ‘requirements.txt’ file)   
9. Once installation is complete, run command ‘dbt deps’. This will install necessary dbt libraries for dbt processing  (list mentioned in the ‘packages.yml’ file)
