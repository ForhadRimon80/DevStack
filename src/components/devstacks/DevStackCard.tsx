import type { IDevStackType } from "../../types/DevStackType";


interface IDevStackCardProps {
  devStack: IDevStackType;
}

const DevStackCard = ({ devStack }: IDevStackCardProps) => {

    console.log(devStack);
    return (
        <div>
            
        </div>
    );
};

export default DevStackCard;