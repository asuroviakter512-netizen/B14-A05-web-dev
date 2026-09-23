import { useEffect, useState } from "react";
import TechnologyCard from "./Technologycard";

type Technology = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [selectedTech, setSelectedTech] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/technology.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);

  const handleSelect = (tech: Technology) => {
    const exists = selectedTech.find(
      (item) => item.id === tech.id
    );

    if (!exists) {
      setSelectedTech([...selectedTech, tech]);
    }
  };

  const removeTech = (id: string) => {
    setSelectedTech(
      selectedTech.filter((item) => item.id !== id)
    );
  };

  const clearAll = () => {
    setSelectedTech([]);
  };

  return (
    <section className="max-w-7xl mx-auto py-20">
      <h2 className="text-5xl font-bold">
        Explore the{" "}
        <span className="text-pink-500">
          Technologies
        </span>
      </h2>

      <p className="mt-3 text-gray-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">

        
        <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => (
            <TechnologyCard
              key={tech.id}
              tech={tech}
              handleSelect={handleSelect}
            />
          ))}
        </div>

        <div className="border rounded-xl p-5 h-fit">
          <h3 className="font-bold text-xl">
            Your Stack
          </h3>

          <p className="text-gray-500 text-sm mt-2 mb-4">
            {selectedTech.length} Technology Selected
          </p>

          {selectedTech.length === 0 ? (
            <p className="text-gray-500">
              No Technology Selected
            </p>
          ) : (
            selectedTech.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border p-3 rounded-lg mt-2"
              >
                <span>{item.name}</span>

                <button
                  onClick={() =>
                    removeTech(item.id)
                  }
                  className="text-red-500 cursor-pointer"
                >
                  ✕
                </button>
              </div>
            ))
          )}

          {selectedTech.length > 0 && (
            <button
              onClick={clearAll}
              className="w-full mt-5 border border-red-300 text-red-500 py-2 rounded-lg hover:bg-red-50 cursor-pointer"
            >
              Remove All
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;