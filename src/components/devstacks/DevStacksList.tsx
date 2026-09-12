import { use } from "react";
import type { IDevStackType } from "../../types/DevStackType";
import DevStackCard from "./DevStackCard";

interface IDevStackProps {
  devStackPromise: Promise<IDevStackType[]>;
}

const DevStacksList = ({ devStackPromise }: IDevStackProps) => {
  const devStacks = use(devStackPromise);

  console.log(devStacks);

  return (
    <div>
      <div className="container mx-auto px-1.5 sm:px-6 lg:px-4">
        <h2 className="font-inter  font-extrabold text-[44px]">
          Explore the <span className="gradient-text2">Technologies</span>
        </h2>
        <p className="text-[#475569] text-[18px]">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-3 gap-7 mt-12 px-1.5 sm:px-6 lg:px-4">
        {devStacks.map((devStack) => {
          return (
            <div key={devStack.id}>
              {" "}
              <DevStackCard devStack={devStack} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DevStacksList;
