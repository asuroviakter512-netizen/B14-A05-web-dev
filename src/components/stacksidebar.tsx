type Technology = {
  id: string;
  name: string;
  description: string;
  icon: string;
};

type Props = {
  selected: Technology[];
  removeTech: (id: string) => void;
  clearAll: () => void;
};

const StackSidebar = ({
  selected,
  removeTech,
  clearAll,
}: Props) => {
  return (
    <div className="border rounded-2xl p-6 h-fit">
      <h2 className="text-2xl font-bold">
        Your Stack
      </h2>

      <p className="text-gray-500 mb-5">
        {selected.length} Technology Selected
      </p>

      <div className="space-y-3">
        {selected.map((tech) => (
          <div
            key={tech.id}
            className="flex justify-between border rounded-lg p-3"
          >
            <span>{tech.name}</span>

            <button
              onClick={() => removeTech(tech.id)}
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={clearAll}
        className="w-full mt-5 border border-red-400 text-red-500 py-2 rounded-lg"
      >
        Remove All
      </button>
    </div>
  );
};

export default StackSidebar;