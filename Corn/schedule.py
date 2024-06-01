from crontab import CronTab
import os

# Get the user's home directory
home_dir = os.path.expanduser("~")

# Define the path to your POST request script
post_request_script = os.path.join(home_dir, 'Corn\make_req.py')

# Create a new cron job
cron = CronTab(user=True)

# Define the cron job command
job = cron.new(command=f'/usr/bin/python3 {post_request_script}', comment='Make POST Request to Flask Server')

# Set the cron job schedule (e.g., every day at 7 AM)
job.setall('0 */12 * * *')

# Add the cron job to the crontab
cron.write()

print("Cron job created successfully.")
