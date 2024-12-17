# OpenRocket Integration Tutorial
- ## Prerequisites
- 1. **Java SE 8 Installation**:
	- Download Java SE 8 from Oracle's Archive Downloads (JDK 8u202 and earlier).
		- [Download Java SE 8](https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html)
	- Install following the provided instructions.
		- Note your installation directory (e.g., `C:\Program Files\Java\jre1.8.0_202`).
		- Ensure compatibility between JDK and Python installations (both should be either 32-bit or 64-bit).
	- Add the `JAVA_HOME` environment variable pointing to your Java SDK installation directory.
- 2. **Python 3.8 Installation**:
	- Download and install Python 3.8.
		- [Download Python 3.8](https://www.python.org/downloads/release/python-380/)
	- Remember the 32-bit vs. 64-bit compatibility as mentioned for Java SE 8.
- 3. **OpenRocket Download**:
	- Download `OpenRocket-15.03.jar`.
		- [Download OpenRocket](https://sourceforge.net/projects/openrocket/files/openrocket/15.03/)
	- Place the `.jar` file in your project directory for easier access.
		- Alternatively, store it in your program files, but ensure it's correctly referenced in the `CLASS_PATH` environment variable if needed.
- ## Setup
  
  1. **Project Directory and Python Virtual Environment**:
	- Create a new project directory.
	- Set up a Python virtual environment using Python 3.8:
	  ```
	  C:Python38python.exe -m venv C:\path\to\project\myproject1
	  cd myproject1
	  .\Scripts\activate  # Windows
	  source bin/activate  # Unix or MacOS
	  ```
	- Verify Python version in the virtual environment: `python --version`.
	- Install Python packages within the virtual environment using pip:
	  ```
	  .\Scripts\python.exe -m pip install package-name
	  ```
	  
	  2. **Installing `orhelper`**:
	- Install `orhelper` in the virtual environment:
	  ```
	  .\Scripts\python.exe -m pip install orhelper
	  ```
	  
	  3. **Setting Up `orhelper`**:
	- Download `orhelper` source or examples from GitHub.
	- [orhelper GitHub Repository](https://github.com/SilentSys/orhelper)
	- Add the downloaded content to your project directory.
	- Modify the path in your code to reflect any changes in directory names:
	  ```python
	  # Load document, run simulation and get data and events
	  doc = orh.load_doc(os.path.join('orhelper', 'simple.ork'))
	  sim = doc.getSimulation(0)
	  ```
- ## Note
- Ensure that the environment setup is consistent across installations to avoid errors.
- For any issues or more detailed instructions, refer to the respective installation guides of Java, Python, and OpenRocket.