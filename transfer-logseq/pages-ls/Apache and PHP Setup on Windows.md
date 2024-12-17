# Apache and PHP Setup on Windows
- ## Step 1: Install Apache
- **Download Apache**
	- Visit [Apache Lounge](https://www.apachelounge.com/download/) and download the appropriate version for your Windows architecture.
- **Extract Files**
	- Extract the Apache files to a directory, e.g., `C:\Apache24`.
- **Open Terminal as Administrator**
	- Search and run "Command Prompt" as administrator.
- **Install Apache Service**
	- Navigate to the Apache bin directory: `cd C:\Apache24\bin`
	- Install Apache as a service: `httpd.exe -k install`
- **Start Apache Service**
	- Start the service: `httpd.exe -k start`
- **Verify Installation**
	- Open `http://localhost` in a web browser to see the Apache test page.
- **Set ServerName**
	- Go to httpd.conf and uncomment and change the ServerName to `ServerName localhost:80` or your website name/IP
- ## Step 2: Install PHP
- **Download PHP**
	- Go to [PHP for Windows](https://windows.php.net/download) and download the latest Thread Safe PHP version.
- **Extract PHP**
	- Extract PHP files to a directory, e.g., `C:\php`.
- **Configure PHP with Apache**
  collapsed:: true
	- **Rename `php.ini` File**
		- Locate the file `php.ini-development` in your PHP installation directory (e.g., `C:\php`).
		- Rename this file to `php.ini`.
	- **Edit `php.ini` for Basic Configuration**
		- Open `php.ini` in a text editor (like Notepad).
		- Find the line `;extension_dir = "ext"`. This line might be commented out (indicated by a semicolon at the beginning).
		- Remove the semicolon to uncomment this line. Ensure it reads `extension_dir = "ext"`. This line specifies the directory where PHP extensions are located.
	- **Enable Required PHP Extensions**
		- PHP extensions are additional features that you can enable or disable as needed. In the `php.ini` file, you'll find a list of these extensions, each preceded by a semicolon.
		- Common extensions that might be required for various applications include `curl`, `gd`, `mbstring`, `pdo_mysql`, `soap`, `xmlrpc`, and `xsl`. These extensions can be enabled by removing the semicolon at the start of each line.
		- For example, to enable `curl`, find the line `;extension=curl`, and change it to `extension=curl`.
		- Similarly, uncomment other required extensions by removing the semicolon at the beginning of each line.
	- **Save Changes**
		- After making these changes, save the `php.ini` file.
	- **Restart Apache**
		- For these changes to take effect, restart the Apache service. You can do this by running `httpd.exe -k restart` in the command prompt (run as administrator).
- **Configure Apache to Use PHP**
	- Edit Apache's `httpd.conf` file in `C:\Apache24\conf`.
	- Add these lines at the end:
	  ```
	  PHPIniDir "C:/php"
	  AddHandler application/x-httpd-php.php
	  LoadModule php_module "C:/php/php8apache2_4.dll"
	  ```
		- Adjust `php8apache2_4.dll` to your PHP version.
- **Restart Apache Service**
	- Restart Apache: `httpd.exe -k restart`
- ## Step 3: Test PHP
- **Create a PHP File**
	- Create `info.php` in `C:\Apache24\htdocs` with:
	  ```php
	  <?php
	  phpinfo();
	  ?>
	  ```
- **Test PHP**
	- Visit `http://localhost/info.php` in a browser.
- *See:*  [[Uninstalling Apache and PHP from Windows]]
- *See:* [[Kanboard Setup on Windows with Apache and PHP]]