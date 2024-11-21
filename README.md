# Getting Started

Follow these steps to set up and run the project:

## Installation

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/plon-Susk7/Job-Board.git
   ```
2. Navigate to the project directory:
    ```bash
    cd JOB-BOARD
    ```
3. Install the necessary dependencies:
    ```bash
    npm install
    ```

## Running the Project
Once the dependencies are installed, you can start the project by running:
```bash
npm start
```
This will start the application. You can access it the link in the console.

***
Feel free to raise an issue if you encounter any problems or have questions about the setup process!

## Updating the Data

The `data.jsx` file contains all the information and data about the repositories. To update it, follow the steps below:

### Scraper Folder

In the `src` folder, there is a `scraper` directory that contains a `repos.yaml` file with the structure outlined below:

```yaml
groups:
  - type: GSOC
    repos:
      - repo_1
      - repo_2
  - type: YC
    repos:
      - repo_1
      - repo_2
```

Inorder to update the data.jsx file simply run the following command

```bash
node index.js
```
This will parse the `repos.yaml` file, retrieve the information for each repository, and update the `data.jsx` file with the latest data.
