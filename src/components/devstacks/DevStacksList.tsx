import { use } from "react";
import type { IDevStackType } from "../../types/DevStackType";

interface IDevStackProps {
  devStackPromise: Promise<IDevStackType[]>;
}

const DevStacksList = ({ devStackPromise }: IDevStackProps) => {
    const devStacks = use(devStackPromise);

    console.log(devStacks);

  return <div>

  </div>;
};

export default DevStacksList;
