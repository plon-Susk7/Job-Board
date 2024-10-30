import ProjectCard from "./ProjectCard";
import data from "./data";

const Body = () => {
    const cards = data.map((element) => (
        <ProjectCard 
            key={element.id}
            name={element.name} 
            icon={element.icon} 
            description={element.description} 
        />
    ));

    console.log(cards);

    return (
        <div className="flex flex-wrap justify-center gap-5">
            {cards}
        </div>
    );
}

export default Body;
