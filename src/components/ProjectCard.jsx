import { Star } from 'lucide-react';

const ProjectCard = ({ prompt, searchTerm = '' }) => {
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substr(0, maxLength) + '...';
    };

    // Function to highlight the search term in text
    const highlightText = (text, term) => {
        if (!term) return text; // If no search term, return the original text
        const parts = text.split(new RegExp(`(${term})`, 'gi')); // Split text by the search term
        return parts.map((part, index) =>
            part.toLowerCase() === term.toLowerCase() ? (
                <mark key={index} className="bg-yellow-200">{part}</mark>
            ) : (
                part
            )
        );
    };

    return (
        <a href={prompt.url} target="_blank" rel="noreferrer noopener">
            <div className="overflow-hidden border border-gray-200 rounded-lg shadow flex flex-col p-4 h-48 max-w-sm">
                <div className="flex justify-between">
                    <img
                        src={prompt.logo}
                        alt={`${prompt.name} Logo`}
                        className="w-8 h-8 mr-2"
                    />
                    <div className="flex items-center justify-center border border-gray-200 rounded-lg p-1">
                        <Star size={16} strokeWidth={1} />
                        <p className="text-sm ml-1">{prompt.stars}</p>
                    </div>
                </div>
                <div>
                    {/* Highlight search term in the name */}
                    <p className="text-lg font-bold">{highlightText(prompt.name, searchTerm)}</p>
                    {/* Highlight search term in the description */}
                    <p className="text-gray-400 text-sm break-words">
                        {highlightText(truncateText(prompt.description, 100), searchTerm)}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default ProjectCard;
