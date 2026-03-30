---
title: AWS RDS setup
---

Sign into your AWS console

## Firewall (Security Groups) setup

We will first define a firewall rule so the approved Dalgo or organisation IP allowlist can access the database you are about to create.

[https://console.aws.amazon.com/ec2/home\#CreateSecurityGroup](https://console.aws.amazon.com/ec2/home#CreateSecurityGroup) 

### Basic Details

Start by naming your new security group

![Screenshot](./images/aws-rds-setup-image1.png)

### Inbound rules

Next define inbound rules allowing PostgreSQL traffic on port `5432` from the approved IP allowlist for your environment. If Dalgo or your infrastructure team provides a current allowlist, use that rather than copying old IP addresses from an outdated guide.

![Screenshot](./images/aws-rds-setup-image2.png)

Leave the Outbound rules and Tags as they are and click “Create security group”. Make a note of the name you chose above; we will use it later.

## RDS Setup

Now navigate to RDS  
[https://console.aws.amazon.com/rds/home](https://console.aws.amazon.com/rds/home) 

Look for and click the “Create Database” button

![Screenshot](./images/aws-rds-setup-image3.png)

### Engine

Choose Postgres as your engine

![Screenshot](./images/aws-rds-setup-image4.png)

Use a currently supported PostgreSQL version that has been approved for your environment.

![Screenshot](./images/aws-rds-setup-image5.png)

### Templates

Choose the template that matches your environment. For lightweight test setups, a free-tier or similarly small template can be a sensible starting point when available.

![Screenshot](./images/aws-rds-setup-image6.png)

### Availability and Durability

Leave it pre-selected to “Single DB Instance”

### Settings

Under Settings, choose a name for your database instance. Use a master username that fits your team standard, then either set a password yourself or let AWS generate one for you. Store the final credentials in Vaultwarden or your approved secret store.

![Screenshot](./images/aws-rds-setup-image7.png)

### Instance configuration

Next choose the instance type, including the RAM and CPU allocation for the database instance. Smaller classes can work well for lightweight or test environments, but size this based on your expected workload.

![Screenshot](./images/aws-rds-setup-image8.png)

### Storage

Now allocate storage for the database. A smaller starting size can be fine for test environments, but review autoscaling, retention, and cost controls before you create the instance.

![Screenshot](./images/aws-rds-setup-image9.png)

### Connectivity

This is the most complicated section. The first few settings will remain unchanged

![Screenshot](./images/aws-rds-setup-image10.png)

Enable public access only if your access pattern depends on IP allowlisting. If your organisation uses private networking or a bastion flow instead, follow that standard.

![Screenshot](./images/aws-rds-setup-image11.png)

VPC Security groups

![Screenshot](./images/aws-rds-setup-image12.png)

Add the security group created earlier; you will end up with “default” as well as your new security group listed here.

The remaining settings can be left unchanged  
![Screenshot](./images/aws-rds-setup-image13.png)

### Tags

Leave unchanged

### Database authentication

Leave set to “Password authentication”

### Monitoring

Review Performance Insights and the rest of the monitoring options based on your support and cost requirements.

### Review and Create

Have a look over your settings and then click the Create Database button

![Screenshot](./images/aws-rds-setup-image14.png)
