import { FiX } from "react-icons/fi";
import type { IDevStackType } from "../../types/DevStackType";

interface IYourStackProps {
  selectedStack: IDevStackType[];
  onRemove: (id: string | number) => void;
  onRemoveAll: () => void;
}

const YourStack = ({
  selectedStack,
  onRemove,
  onRemoveAll,
}: IYourStackProps) => {
  return (
    <div className="bg-white border border-slate-100 rounded-3xl shadow-sm p-7 sticky top-5">
      {/* Header */}
      <div>
        <h2 className="text-[24px] font-bold text-slate-900">Your Stack</h2>

        <p className="text-[16px] text-slate-400 mt-1">
          {selectedStack.length}{" "}
          {selectedStack.length === 1 ? "Technology" : "Technologies"} Selected
        </p>
      </div>

      {/* Stack Items */}
      <div className="mt-5 space-y-2">
        {selectedStack.length === 0 ? (
          <div className="py-12 text-center">
            <p className="text-slate-400 text-[16px]">Your stack is empty</p>
          </div>
        ) : (
          selectedStack.map((devStack) => (
            <div
              key={devStack.id}
              className="flex items-center justify-between border border-slate-200 rounded-xl px-4 py-3">
              {/* Left Side */}
              <div className="flex items-center gap-3 min-w-0">
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center shrink-0">
                  <img
                    src={devStack.icon}
                    alt={devStack.name}
                    className="w-9 h-9 object-contain"
                  />
                </div>

                {/* Name + Category */}
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-800 text-[14px] truncate">
                    {devStack.name}
                  </h3>

                  <p className="text-[10px] text-slate-400">
                    {devStack.category}
                  </p>
                </div>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => onRemove(devStack.id)}
                className="text-slate-400 hover:text-slate-700 transition-colors p-1 shrink-0"
                aria-label={`Remove ${devStack.name}`}>
                <FiX size={21} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Remove All */}
      {selectedStack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full h-12 mt-6 rounded-xl border border-red-300 text-red-500 hover:bg-red-50 transition-colors font-semibold">
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;
