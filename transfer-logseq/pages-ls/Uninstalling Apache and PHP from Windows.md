# Uninstalling Apache and PHP from Windows
- ## Uninstall Apache
- **Open Terminal as Administrator**
	- Search for "cmd" in the start menu, right-click on "Command Prompt", and select "Run as administrator".
- **Stop Apache Service**
	- Run the command to stop the Apache service:
	  ```
	  httpd.exe -k stop
	  ```
- **Remove Apache Service**
	- Remove the Apache service registration:
	  ```
	  httpd.exe -k uninstall
	  ```
- **Delete Apache Files**
	- Manually delete the Apache folder (e.g., `C:\Apache24`).
- ## Uninstall PHP
- **Delete PHP Files**
	- Manually delete the PHP folder (e.g., `C:\php`).
- ## Additional Steps
- **Environment Variables**
	- If you added Apache or PHP to your system's environment variables, you should remove them.
	- Access `System Properties` > `Advanced` > `Environment Variables` and edit the `Path` variable.
- **Reboot**
	- Reboot your computer to ensure all changes take effect.