import { use, useState } from "react";
import type { IDevStackType } from "../../types/DevStackType";
import DevStackCard from "./DevStackCard";
import YourStack from "./YourStack";

interface IDevStackProps {
  devStackPromise: Promise<IDevStackType[]>;
}

const DevStacksList = ({ devStackPromise }: IDevStackProps) => {
  const devStacks = use(devStackPromise);

  const [selectedStack, setSelectedStack] = useState<IDevStackType[]>([]);

  // Add technology to stack
  const handleAddToStack = (devStack: IDevStackType) => {
    setSelectedStack((prev) => {
      // Prevent duplicate technology
      const alreadyExists = prev.some((item) => item.id === devStack.id);

      if (alreadyExists) {
        return prev;
      }

      return [...prev, devStack];
    });
  };

  // Remove one technology
  const handleRemoveFromStack = (id: string | number) => {
    setSelectedStack((prev) => prev.filter((item) => item.id !== id));
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <div>
      <div className="container mx-auto px-1.5 sm:px-6 lg:px-4">
        <h2 className="font-inter font-extrabold text-[44px]">
          Explore the <span className="gradient-text2">Technologies</span>
        </h2>

        <p className="text-[#475569] text-[18px]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-12 gap-7 mt-12 px-1.5 sm:px-6 lg:px-4">
        {/* Technology Cards */}
        <div className="col-span-9 grid grid-cols-3 gap-7">
          {devStacks.map((devStack) => (
            <div key={devStack.id}>
              <DevStackCard devStack={devStack} onAdd={handleAddToStack} />
            </div>
          ))}
        </div>

        {/* Your Stack */}
        <div className="col-span-3">
          <YourStack
            selectedStack={selectedStack}
            onRemove={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default DevStacksList;

