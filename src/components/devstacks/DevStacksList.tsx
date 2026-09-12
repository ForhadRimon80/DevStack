import { use } from "react";
import type { IDevStackType } from "../../types/DevStackType";
import DevStackCard from "./DevStackCard";

interface IDevStackProps {
  devStackPromise: Promise<IDevStackType[]>;
}

const DevStacksList = ({ devStackPromise }: IDevStackProps) => {
  const devStacks = use(devStackPromise);

  // console.log(devStacks);

  return <div>
    {
      devStacks.map((devStack) => {
        return <div key={devStack.id}> <DevStackCard devStack={devStack} />
        </div>;
      })
    }
  </div>;
};

export default DevStacksList;
