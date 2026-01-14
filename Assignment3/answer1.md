# Understanding Project Management in NodeJS

## a. Package Managers

### What is a package manager?
A package manager is a tool that helps us install, update, remove, and manage libraries (packages) that our project depends on.  
Instead of writing everything from scratch, we can use ready-made code using a package manager.

---

### Why do we need package managers in backend development?
- Backend projects depend on many libraries (frameworks, database drivers, utilities).
- Package managers make it easy to:
  - Install required libraries
  - Keep versions consistent
  - Share the project with others

Example:
- Installing Express instead of manually downloading its files.

---

### Problems faced if package managers are not used
- Manually managing libraries becomes difficult.
- Version conflicts between libraries.
- Hard to set up the project on another machine.
- More chances of bugs and missing files.

---

## b. NPM (Node Package Manager)

### What is NPM?
NPM is the default package manager for Node.js.  
It allows developers to install and manage JavaScript packages easily.

---

### Why is NPM important for Node.js applications?
- It gives access to thousands of useful packages.
- Helps manage project dependencies.
- Makes project setup fast and simple.

Example:
- Installing Express using:
  ```bash
  npm install express
  
## How NPM helps in managing dependencies
-Keeps track of installed packages.
-Stores package details in package.json.
-Automatically installs required dependencies when someone runs:

npm install
## c. Backend Project Initialization
- Command used to initialize a backend (Node.js) project
npm init
## What does npm init do?
- Starts an interactive setup.
- Asks questions like project name, version, description.
- Creates a package.json file based on answers.

## What does npm init -y do?
- Skips all questions.
- Creates package.json with default values.
- Faster way to start a project.
---

## d. Files and Folders Created After Project Initialization
## package.json
- Main configuration file for the project.
- Stores:
Project details
Dependencies
Scripts
- Very important for sharing and running the project.

## node_modules
Contains all installed packages.
Can be very large in size.
Created automatically when dependencies are installed.

## package-lock.json
Stores exact versions of installed packages.
Ensures same dependencies are installed on all machines.
Helps avoid version mismatch issues.

## Files/Folders and GitHub

## Which files/folders should NOT be pushed to GitHub and why?
node_modules
Very large
Can be recreated using npm install
Not needed in the repository
Which files MUST be committed and why?
package.json
Contains dependency information
package-lock.json
Ensures consistent dependency versions
These files help others install the exact same setup.
---