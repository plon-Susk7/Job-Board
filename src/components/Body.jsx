import ProjectCard from "./ProjectCard";
import data from "./data";
import axios from "axios";
import { useEffect,useState } from "react";



const GetRepo = async () => {
    try {
        const response = await axios.get('https://api.github.com/repos/dubinc/oss-gallery');
        return response.data; // returns the data object
    } catch (error) {
        console.error("Error fetching repo data:", error);
        return null;
    }
};
  

const Body = () => {

    const [repoData,setRepoData] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            const data = await GetRepo();
            console.log(data)
            setRepoData(data)
        }

        fetchData();
    },[])

    const cards = data.map((element) => (
        <ProjectCard 
            key={element.id}
            name={element.name} 
            icon={element.icon} 
            description={element.description} 
        />
    ));

    return (
        <>
            <div className="mx-auto min-h-screen w-full max-w-screen-md mt-4">
                <h1 className='text-lg font-bold mb-5'>All Project</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card, index) => (
                        <div key={index} className="transform transition-transform duration-300 hover:translate-y-[-4px] hover:shadow-lg">
                            {card}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Body;
