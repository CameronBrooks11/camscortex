- [[CameronBrooks-net]]
- name is `website-ip-address`
	- `34.130.76.199`
- Did the "Building a Custom Website with Google Cloud" tutorial on Google Cloud to:
	- Deploy your choice of web stack on Google Compute Engine
	- Learn how to reach your website
	- Set a static IP address for your website
	- Configure a DNS zone for your website
- Then I added an A record on SquaresSpace to point to that new IP listed above
	- Also added the 4 name space records
		- `ns-cloud-e1.googledomains.com`
		- `ns-cloud-e2.googledomains.com`
		- `ns-cloud-e3.googledomains.com`
		- `ns-cloud-e4.googledomains.com`
- **Connect to Your VM Instance**:
	- Use SSH to connect to your Compute Engine VM instance. You can do this via the Google Cloud Console's web interface, using the `gcloud` command-line tool, or using an SSH client with the VM's external IP address.
- **Update Your Package Manager** (if using a Linux system such as Ubuntu or Debian):
	- ```
	  sudo apt-get update
	  sudo apt-get upgrade
	  ```
- **Verify Apache Installation**:
	- After installing, Apache should start automatically. To test this, enter your VM's external IP address into a web browser. You should see the default Apache page.
- **Create Your Webpage**:
	- Navigate to the web root directory (usually `/var/www/html/` on Apache).
	- Use a text editor to create a new HTML file, e.g., `index.html`:
	- ```
	  sudo nano /var/www/html/index.html
	  ```
- Apache gives a default
	- Save and close the file (`Ctrl+X`, then `Y` for nano editor).
- **Set Permissions**:
	- Make sure that your `index.html` file is readable by the web server
	- ```
	  sudo chmod 644 /var/www/html/index.html
	  ```
- **Restart Apache**:
	- To ensure all changes are loaded, restart the Apache server:
		- ```
		  sudo systemctl restart apache2
		  ```
- **Test Your Webpage**:
	- Enter your VM's external IP address or your domain name (if DNS has propagated) into a web browser. You should now see your new "Hello, World!" webpage.
- **Install Git**:
	- If `git` is not installed on your VM, install it using your package manager. For Ubuntu/Debian:
		- ```
		  sudo apt-get install git
		  ```
- **Configure Git**:
	- Set your global Git configuration settings:
		- ```
		  git config --global user.name "Cameron Brooks"
		  git config --global user.email "cambrooks3393@gmail.com"
		  ```
- **Generate an SSH Key** (if you haven't already):
	- ```
	  ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
	  ```
	- Your identification has been saved in /home/cambrooks3393/.ssh/id_rsa
	  Your public key has been saved in /home/cambrooks3393/.ssh/id_rsa.pub
	  The key fingerprint is:
	  SHA256:RPMrYIx1bQgixgzHIL9yMS+hbj6kK0jR7HDOo3m50GE cambrooks3393@gmail.com
	  The key's randomart image is:
	  ```
	  +---[RSA 4096]----+
	  |+*+ . o.+o       |
	  |.++. = o.oo      |
	  |  B . + ...      |
	  | + X . o   .     |
	  |o @E.   S .      |
	  |.=o*.    .       |
	  |=+o.o            |
	  |*+.o             |
	  |ooo..            |
	  +----[SHA256]-----+
	  ```
	- ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQC98k9rCERyw/FDYXcljQbtERqy5aHr+glOH4IEnNLZA+W+g0wjN+vUgWIu6EY2C6ySFk0uPzVl+Gp12mMnmQZiyp7est1m1ZwV7uHpAoGDWX2vOltwqwiOWxHh436n1VlP52b8wtFwYpheqtc05FR3S3wwJyOITBk6+YesQheNstYoniCZzYQEMDCoTVuWO/FWuqCRiflC5n3Ej0u/C7CmAa9/doPr51qaOYbm8oasnmbJFBJ6iknohPknyFhUfsZnWlXqOKP11i20S4rLMWZ5f53NjnF1cKB6K0hBmysECywF6rYLzFhIknNMOS8ukN7A64lnzLiJd5RM9VbnlxeeU6ijtmg+TBr47K2+TsD5u+X21KywY7uVTb8auBpaStruWzR3Z3WN0CnSgiQ3XyPVb8jik9l06nHloOK7ceEpupUOuc6A9Ww+xrBJ0yLs4/JHMwtnAzod/6dtJ+H8OgYJx9ITXivR8ow4PVpryVB1pKIJrZUUY4xQkoH8dVeGaW25zvcEQ38apcWfWQFoUuC4QDWLkNV2A9NJVYULOK6nv8RfPceGqCW5YGfkbwwOV7JP0TeHxBVv/FeVCKMyZEzyEECU17ot0Gb6b+0p2B2pAVsCNScib2wgP5st8xXU2NxdpNRFMvs81WuTEi4Fju4Phs/QIpA/JmzZFXzlWxf1PQ== cambrooks3393@gmail.com
	- Add the key to GitHub under SSH and GPG keys in settings
	- Had to also do: eval "$(ssh-agent -s)" before I could clone the repo to my VM
	- Also had to do:
	- **Configure Pull Behavior** (optional):
		- To set your desired pull behavior and prevent Git from showing the hint message in the future, you can run one of the suggested configurations. For example, if you want to set a merge strategy for pulls, run:
		  
		  ```
		  git config --global pull.rebase false
		  ```
		- Once I did this I could pull normally
	- Then i removed the default apache2 webserver default page: sudo rm /var/www/html/index.html
	- Gotta do:
		- sudo mv /var/www/html/cameronbrooksdotnet/* /var/www/html/
		  sudo mv /var/www/html/cameronbrooksdotnet/.* /var/www/html/ 2> /dev/null
- I made a favicon:
	- used favicon.io to generate it from my icon I made on OpenArt.ai
	- added it all under the img folder then copied the favicon.ico to the parent dir of the repo
	- Pushed it to repo and pulled it on the server
	- Had to add this to the <head> of each html file:
		- ```
		  <link rel="icon" type="image/x-icon" href="/favicon.ico">
		  ```
	- then did:
		- ```
		  sudo nano .htaccess
		  ```
		- and added this to the file:
			- ```
			  AddType image/x-icon .ico
			  ```
- Okay its switch up time - deleted cameronbrooksdotnet and now gonna use cameronbrooks-net with a better template that uses pug and js for more simple editing since it generates the html
	- First had to clear everything from the server:  rm -rf *
- installing Node.js 18 LTS ("Hydrogen")
	- ```
	  curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
	  sudo apt-get install -y nodejs
	  ```
- Install dependancies:
	- ```
	  npm install
	  ```
- Build the project:
	- ```
	  npm run build
	  ```
- Change the Apache2 server to point to `cameronbrooks-net/dist`
	- sudo nano /etc/apache2/sites-available/000-default.conf
	- change `DocumentRoot`from `/var/www/html` to be `/var/www/html/cameronbrooks-net/dist`
	- Restart the web server
		- ```
		  sudo service apache2 restart
		  ```
- It works - even the Favicon!
- I added a www CNAME record
	- In order for it to redirect, I had to