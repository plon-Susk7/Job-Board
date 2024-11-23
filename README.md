# Open Source Repository Finder

Welcome to the **Open Source Repository Finder**! This is an open-source platform designed to help users discover open-source projects that are either **YC (Y Combinator) funded** or have participated in **Google Summer of Code (GSOC)**.

The website serves as a **crowdsourced repository directory**, where users can contribute by submitting new repositories. Whether it's a YC-funded project or a GSOC participant, this platform aggregates and displays repositories that meet these criteria.

## How It Works

- **Discover Open Source Projects**: Browse through a curated list of repositories from YC-funded projects and GSOC participants.
- **Submit New Repositories**: If you know of a project that fits the criteria, you can easily add it to the platform by either:
  - **Submitting a repository link** directly via the website.
  - **Creating a Pull Request** by updating the `repos.yaml` file located in the `src/scraper` directory. This allows you to directly contribute to the repository listing.

By contributing and updating the repository list, you're helping grow the open-source community and supporting projects that have been backed by YC or participated in GSOC.

## Contributing

To submit new repositories or make any updates, follow these steps:

1. Fork the repository and clone it to your local machine.
2. Create a new file called `.env` and copy contents from `.env.example` to it. You can get your token from https://github.com/settings/tokens 
3. Update the `repos.yaml` file located in `src/scraper` with the details of the repository you wish to add.
4. Submit a pull request with your changes.

Your contributions help make this platform a valuable resource for open-source enthusiasts and developers!

***

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

***
Feel free to raise an issue if you encounter any problems or have questions about the setup process!

