import { use, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import type { IDevStackType } from "../../types/DevStackType";
import DevStackCard from "./DevStackCard";
import YourStack from "./YourStack";

interface IDevStackProps {
  devStackPromise: Promise<IDevStackType[]>;
}

const DevStacksList = ({ devStackPromise }: IDevStackProps) => {
  const devStacks = use(devStackPromise);

  const [selectedStack, setSelectedStack] = useState<IDevStackType[]>([]);

  // Add to Stack
  const handleAddToStack = (devStack: IDevStackType) => {
    const alreadyAdded = selectedStack.some((item) => item.id === devStack.id);

    if (alreadyAdded) return;

    setSelectedStack((prev) => [...prev, devStack]);

    toast.success(`${devStack.name} added to your stack!`);
  };

  // Remove Single Item
  const handleRemoveFromStack = (id: string | number) => {
    const removedItem = selectedStack.find((item) => item.id === id);

    if (!removedItem) return;

    setSelectedStack((prev) => prev.filter((item) => item.id !== id));

    toast.success(`${removedItem.name} removed from your stack!`);
  };

  // Remove All
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;

    setSelectedStack([]);

    toast.success("All technologies removed from your stack!");
  };

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-4">
        {/* Section Header */}
        <div className="mt-20 sm:mt-24 lg:mt-30">
          <h2 className="font-inter text-[32px] font-extrabold leading-tight sm:text-[38px] md:text-[40px] lg:text-[44px]">
            Explore the <span className="gradient-text2">Technologies</span>
          </h2>

          <p className="mt-2 text-[15px] text-[#475569] sm:text-[16px] lg:text-[18px]">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Content */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 lg:mt-12 lg:grid-cols-12 lg:gap-7">
          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:col-span-9 lg:grid-cols-3 lg:gap-7">
            {devStacks.map((devStack) => (
              <DevStackCard
                key={devStack.id}
                devStack={devStack}
                onAdd={handleAddToStack}
                isAdded={selectedStack.some((item) => item.id === devStack.id)}
              />
            ))}
          </div>

          {/* Your Stack */}
          <div className="w-full lg:col-span-3">
            <YourStack
              selectedStack={selectedStack}
              onRemove={handleRemoveFromStack}
              onRemoveAll={handleRemoveAll}
            />
          </div>
        </div>
      </section>

      {/* React Toastify */}
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default DevStacksList;
