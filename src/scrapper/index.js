import fs from 'fs';
import yaml from 'js-yaml';
// import fetch from 'node-fetch';

const fileContent = yaml.load(fs.readFileSync('repos.yaml', 'utf-8'));
const groups = fileContent.groups; // Extract the groups array from the YAML file

const GetRepo = async (element, type) => {
    try {
        const response = await fetch(element);
        const repoData = await response.json();
        console.log(repoData);
        return {
            name: repoData.name,
            description: repoData.description,
            url: repoData.html_url,
            stars: repoData.stargazers_count,
            logo: repoData.organization?.avatar_url || "",
            type // Add the 'type' field here
        };
    } catch (error) {
        console.error("Error fetching repo data:", error);
        return null;
    }
};

const fetchAndSaveData = async () => {
    let allFetchedData = [];
    for (const group of groups) {
        const { type, repos } = group;
        const dataPromises = repos.map(url => GetRepo(url, type));
        const fetchedData = await Promise.all(dataPromises);
        allFetchedData = allFetchedData.concat(fetchedData.filter(data => data !== null));
    }

    const fileContent = `// Auto-generated file\nconst Data =  ${JSON.stringify(allFetchedData, null, 4)};\nexport default Data;`;

    fs.writeFileSync('/home/priyash7/Desktop/Job-Board/src/components/data.jsx', fileContent);
    console.log('Data fetched and saved successfully');
};

fetchAndSaveData();
