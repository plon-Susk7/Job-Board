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

    return (
        <>
            <div className="mx-auto min-h-screen w-full max-w-screen-md mt-4">
                <h1 className='text-lg font-bold mb-5'>All Project</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {cards.map((card, index) => (
                        <div key={index}>
                            {card}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Body;
