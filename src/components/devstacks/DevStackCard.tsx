import { FaStar } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import type { IDevStackType } from "../../types/DevStackType";

interface IDevStackCardProps {
  devStack: IDevStackType;
  onAdd: (devStack: IDevStackType) => void;
  isAdded: boolean;
}

interface IBadgeColors {
  [key: string]: string;
}



const DevStackCard = ({ devStack, onAdd, isAdded }: IDevStackCardProps) => {

    const badgeColors: IBadgeColors = {
      react: "border-[#E0F2FE] bg-[#F0F9FF] text-[#0EA5E9]",
      vue: "border-[#D1FAE5] bg-[#ECFDF5] text-[#059669]",
      svelte: "border-[#FFEDD5] bg-[#FFF7ED] text-[#EA580C]",
      nextjs: "border-[#DFCAFF] bg-[#F3E8FF] text-[#7E22CE]",
      nodejs: "border-[#D1FAE5] bg-[#ECFDF5] text-[#059669]",
      postgresql: "border-[#DBEAFE] bg-[#EFF6FF] text-[#2563EB]",
      redis: "border-[#FEE2E2] bg-[#FEF2F2] text-[#DC2626]",
      javascript: "border-[#FEF3C7] bg-[#FFFBEB] text-[#D97706]",
      typescript: "border-[#E0F2FE] bg-[#F0F9FF] text-[#0284C7]",
      java: "border-[#E0F2FE] bg-[#F0F9FF] text-[#0284C7]",
      tailwindcss: "border-[#CFFAFE] bg-[#ECFEFF] text-[#0891B2]",
      docker: "border-[#E0F2FE] bg-[#F0F9FF] text-[#0284C7]",
    };

  return (
    <article
      className={`card w-full min-h-auto rounded-3xl bg-white shadow-sm transition-shadow duration-300 ${
        isAdded
          ? "border-2 border-[#D91B7E]"
          : "border border-gray-100 hover:shadow-2xl"
      }`}>
      <div className="card-body p-4 sm:p-5 lg:p-8">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center sm:h-9 sm:w-9 lg:h-10 lg:w-10">
            <img
              src={devStack.icon}
              alt={devStack.name}
              className="h-8 w-8 object-contain sm:h-9 sm:w-9 lg:h-10 lg:w-10"
            />
          </div>

          <span className={ `badge max-w-[55%] truncate rounded-full border ${badgeColors[devStack.id] || 'border-sky-100 bg-sky-50 text-sky-500' } px-3 py-2 text-[11px] font-medium sm:px-4 sm:text-xs lg:px-5 lg:py-4 lg:text-sm `}>
            {devStack.badge}
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-3 text-[15px] font-bold leading-tight text-gray-900 sm:mt-4 sm:text-[16px] lg:mt-5 lg:text-[18px]">
          {devStack.name}
        </h2>

        {/* Description */}
        <p className="mt-1 text-[12px] leading-normal text-gray-500 sm:text-[13px] lg:text-[15px] lg:leading-[1.7]">
          {devStack.description}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between gap-1.5 pt-3 sm:pt-4">
          <span className="max-w-[40%] truncate rounded-lg bg-gray-100 px-2 py-1.5 text-[10px] font-medium text-gray-600 sm:px-3 sm:text-[11px] lg:px-4 lg:py-2 lg:text-[13px]">
            {devStack.category}
          </span>

          <span className="whitespace-nowrap text-[10px] font-medium text-gray-500 sm:text-[11px] lg:text-[13px]">
            {devStack.difficulty}
          </span>

          <div className="flex shrink-0 items-center gap-1 text-[10px] font-semibold text-gray-700 sm:text-[11px] lg:gap-2 lg:text-[13px]">
            <FaStar className="text-[11px] text-yellow-400 lg:text-[14px]" />
            <span>{devStack.rating}</span>
          </div>
        </div>

        {/* Button */}
        <div className="card-actions mt-3 sm:mt-4">
          <div
            className="w-full"
            onMouseEnter={() => {
              if (isAdded) {
                onAdd(devStack);
              }
            }}>
            <button
              onClick={() => onAdd(devStack)}
              disabled={isAdded}
              className={`btn h-9 min-h-9 w-full rounded-lg px-2 text-[12px] font-medium sm:h-10 sm:min-h-10 sm:text-[13px] lg:h-12 lg:min-h-12 lg:px-4 lg:text-[16px] ${
                isAdded
                  ? "cursor-not-allowed border border-[#D91B7E] bg-[#FFF1F7] text-[#D91B7E]"
                  : "border-none bg-[#080d1d] text-white hover:bg-gray-800"
              }`}>
              {isAdded ? (
                <span className="flex items-center justify-center gap-1">
                  <GiCheckMark className="text-[12px] sm:text-[13px] lg:text-[16px]" />
                  Added to Stack
                </span>
              ) : (
                "Add to Stack"
              )}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DevStackCard;
