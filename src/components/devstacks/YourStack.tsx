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
    <aside className="w-full rounded-3xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6 lg:sticky lg:top-5 lg:p-7">
      {/* Header */}
      <div>
        <h2 className="text-[22px] font-bold text-gray-900 sm:text-[24px]">
          Your Stack
        </h2>

        <p className="mt-1 flex items-center gap-1.5 text-[14px] text-gray-400 sm:text-[15px]">
          <span>
            {selectedStack.length === 0 ? "No" : selectedStack.length}
          </span>
          <span>
            {selectedStack.length === 1
              ? "Technology Selected"
              : "Technologies Selected"}
          </span>
        </p>
      </div>

      {/* Stack Items */}
      <div className="mt-5 space-y-2">
        {selectedStack.length === 0 ? (
          <div className="py-10 text-center sm:py-12">
            <p className="text-[14px] text-gray-400 sm:text-[16px]">
              Your stack is empty
            </p>
          </div>
        ) : (
          selectedStack.map((devStack) => (
            <div
              key={devStack.id}
              className="flex items-center justify-between gap-2 rounded-xl border border-gray-200 px-3 py-3 sm:px-4">
              {/* Technology Info */}
              <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center sm:h-10 sm:w-10">
                  <img
                    src={devStack.icon}
                    alt={devStack.name}
                    className="h-8 w-8 object-contain sm:h-9 sm:w-9"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="truncate text-[13px] font-semibold sm:text-[14px]">
                    {devStack.name}
                  </h3>

                  <p className="truncate text-[10px] text-gray-400">
                    {devStack.category}
                  </p>
                </div>
              </div>

              {/* Remove */}
              <button
                onClick={() => onRemove(devStack.id)}
                aria-label={`Remove ${devStack.name}`}
                className="shrink-0 cursor-pointer p-1 text-gray-400 transition-colors hover:text-gray-700">
                <FiX size={20} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Remove All */}
      {selectedStack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-5 h-11 w-full cursor-pointer rounded-xl border border-red-300 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50 sm:mt-6 sm:h-12 sm:text-base">
          Remove All
        </button>
      )}
    </aside>
  );
};

export default YourStack;
