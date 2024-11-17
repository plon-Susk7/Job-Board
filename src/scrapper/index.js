// Need to read repos.txt file and get repos and fetch information from api

import fs from 'fs';
// import fetch from 'node-fetch';

const repos = fs.readFileSync('repos.txt', 'utf-8').split('\n');

const GetRepo = async (element) => {
    try {
        const response = await fetch(element);
        const repoData = await response.json();
        console.log(repoData);
        return {
            name: repoData.name,
            description: repoData.description,
            url: repoData.html_url,
            stars : repoData.stargazers_count,
            logo: repoData.organization?.avatar_url || ""
        };
    } catch (error) {
        console.error("Error fetching repo data:", error);
        return null;
    }
}

const fetchAndSaveData = async () => {
    const dataPromises = repos.map(url => GetRepo(url));
    const fetchedData = await Promise.all(dataPromises);

    const filterData = fetchedData.filter(data => data !== null);

    const fileContent = `// Auto-generated file\nconst Data =  ${JSON.stringify(filterData, null, 4)};\nexport default Data;`;

    fs.writeFileSync('/home/priyash7/Desktop/Job-Board/src/components/data.jsx', fileContent);
    console.log('Data fetched and saved successfully');
}

fetchAndSaveData();

