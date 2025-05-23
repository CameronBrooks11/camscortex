# Kanboard Setup on Windows with Apache and PHP

## Prerequisites

- Ensure you have Apache and PHP installed:
  - [[Apache and PHP Setup on Windows]]
- Verify your server configuration adheres to Kanboard's requirements:
  - Protect the `data` directory from public URL access.
  - Enable `.htaccess` in Apache (`AllowOverride All`).

## Installation Steps

### From the Archive (Stable Version)

    1. **Download Kanboard**
    - Download the stable version of Kanboard from their [official website](https://kanboard.org/).

- 2. **Upload Kanboard to Your Server**
  - Copy the Kanboard directory to your desired location on the server. For example, to `C:\Apache24\htdocs\kanboard`.
- 3. **Check Directory Permissions**
  - Ensure the `data` directory within the Kanboard folder is writable by the web server user.
- 4. **Configure Apache (if not already done)**
  - Edit the Apache configuration file (`httpd.conf`) to enable `.htaccess`:
    - Find the `<Directory>` section corresponding to your server's root (e.g., `C:\Apache24\htdocs`).
    - Change `AllowOverride None` to `AllowOverride All`.
  - Restart Apache to apply changes: `httpd.exe -k restart`.
- 5. **Access Kanboard**
  - Open a web browser and go to `http://localhost/kanboard`.
  - Log in with the default credentials: **Username:** `admin` **Password:** `admin`.
- 6. **Change Default Credentials**
  - For security, change the default username and password immediately.

### From the Git Repository (Development Version)

    1. **Clone the Repository**
    - Use Git to clone the repository: `git clone https://github.com/kanboard/kanboard.git`.
    - Follow the steps from the third point in the above section.

## Post-Installation

- **Data Folder Usage**
  - Understand that the `data` folder is used to store:
    - SQLite database (`db.sqlite`).
    - Debug file (`debug.log`) if debug mode is enabled.
    - Uploaded files (`files/*`).
    - Image thumbnails (`files/thumbnails/*`).
- **Remote Database and Object Storage**
  - Users with a remote database (MySQL/PostgreSQL) and object storage (AWS S3) might not require a persistent local `data` folder.

## Note

- Using the Git repository method will install the _current development version of Kanboard_, which **might be unstable**.
- **_Use at your own risk_**.
