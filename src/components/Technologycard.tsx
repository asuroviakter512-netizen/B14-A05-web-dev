
type Technology = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

type Props = {
  tech: Technology;
  handleSelect: (tech: Technology) => void;
};

const TechnologyCard = ({ tech, handleSelect }: Props) => {
  return (
    <div className="border rounded-xl p-5">
      <img
        src={tech.icon}
        alt={tech.name}
        className="w-12 h-12"
      />
      <a className="cursor-pointer">
       Learn More
      </a>

      <h2 className="text-2xl font-bold mt-4">
        {tech.name}
      </h2>

      <p className="text-gray-500 mt-2">
        {tech.description}
      </p>

      <button
        onClick={() => handleSelect(tech)}
        className="bg-black text-white px-4 py-2 rounded mt-5 w-full cursor-pointer"
      >
        Add to Stack
      </button>
    </div>
  );
};

export default TechnologyCard;


