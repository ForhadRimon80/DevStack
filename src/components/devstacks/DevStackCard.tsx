import { useState } from "react";
import { FaCheck, FaStar } from "react-icons/fa6";
import type { IDevStackType } from "../../types/DevStackType";

interface IDevStackCardProps {
  devStack: IDevStackType;
  onAdd: (devStack: IDevStackType) => void;
}

const DevStackCard = ({ devStack, onAdd }: IDevStackCardProps) => {
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = () => {
    onAdd(devStack);
    setIsAdded(true);
  };

  return (
    <div
      className={`card w-full max-w-120.5 bg-white rounded-3xl shadow-sm transition-shadow duration-300 ${
        isAdded
          ? "border-2 border-[#D91B7E]"
          : "border border-slate-100 hover:shadow-2xl"
      }`}>
      <div className="card-body p-8">
        {/* Logo and Badge */}
        <div className="flex items-start justify-between">
          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center">
            <img
              src={devStack.icon}
              alt={devStack.name}
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Badge */}
          <span className="badge badge-lg rounded-full bg-sky-50 border border-sky-100 text-sky-500 px-5 py-4 font-medium">
            {devStack.badge}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-[34px] leading-tight font-bold text-slate-900 mt-5">
          {devStack.name}
        </h2>

        {/* Description */}
        <p className="text-[21px] leading-[1.7] text-slate-500 mt-3 min-h-26.25">
          {devStack.description}
        </p>

        {/* Category, Difficulty, Rating */}
        <div className="flex items-center justify-between gap-3 mt-6 pt-4">
          {/* Category */}
          <span className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-[17px]">
            {devStack.category}
          </span>

          {/* Difficulty */}
          <span className="text-slate-500 text-[17px]">
            {devStack.difficulty}
          </span>

          {/* Rating */}
          <div className="flex items-center gap-2 text-slate-700 text-[17px]">
            <span className="text-yellow-400 text-xl">
              <FaStar />
            </span>

            <span>{devStack.rating}</span>
          </div>
        </div>

        {/* Add Button */}
        <div className="card-actions mt-7">
          <button
            onClick={handleAdd}
            disabled={isAdded}
            className={`btn w-full h-16 min-h-0 rounded-[14px] text-[21px] font-normal ${
              isAdded
                ? "bg-[#FFF1F7] border border-[#D91B7E] text-[#D91B7E] hover:bg-[#FFF1F7] cursor-not-allowed"
                : "bg-[#080d1d] hover:bg-slate-800 border-none text-white"
            }`}>
            {isAdded ? (
              <span className="flex items-center justify-center gap-2">
                <FaCheck className="text-[18px]" />
                Added to Stock
              </span>
            ) : (
              "Add to Stack"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DevStackCard;

// import type { IDevStackType } from "../../types/DevStackType";

// interface IDevStackCardProps {
//   devStack: IDevStackType;
//   onAdd: (devStack: IDevStackType) => void;
// }

// const DevStackCard = ({ devStack, onAdd }: IDevStackCardProps) => {
//   return (
//     <div className="card w-full max-w-120.5 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-2xl transition-shadow duration-300">
//       <div className="card-body p-8">
//         {/* Logo and Badge */}
//         <div className="flex items-start justify-between">
//           {/* Icon */}
//           <div className="w-16 h-16 flex items-center justify-center">
//             <img
//               src={devStack.icon}
//               alt={devStack.name}
//               className="w-12 h-12 object-contain"
//             />
//           </div>

//           {/* Badge */}
//           <span className="badge badge-lg rounded-full bg-sky-50 border border-sky-100 text-sky-500 px-5 py-4 font-medium">
//             {devStack.badge}
//           </span>
//         </div>

//         {/* Title */}
//         <h2 className="text-[34px] leading-tight font-bold text-slate-900 mt-5">
//           {devStack.name}
//         </h2>

//         {/* Description */}
//         <p className="text-[21px] leading-[1.7] text-slate-500 mt-3 min-h-26.25">
//           {devStack.description}
//         </p>

//         {/* Category, Difficulty, Rating */}
//         <div className="flex items-center justify-between gap-3 mt-6 pt-4">
//           {/* Category */}
//           <span className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-[17px]">
//             {devStack.category}
//           </span>

//           {/* Difficulty */}
//           <span className="text-slate-500 text-[17px]">
//             {devStack.difficulty}
//           </span>

//           {/* Rating */}
//           <div className="flex items-center gap-2 text-slate-700 text-[17px]">
//             <span className="text-yellow-400 text-xl">
//               <FaStar />
//             </span>

//             <span>{devStack.rating}</span>
//           </div>
//         </div>

//         {/* Add Button */}
//         <div className="card-actions mt-7">
//           <button
//             onClick={() => onAdd(devStack)}
//             className="btn w-full h-16 min-h-0 rounded-[14px] bg-[#080d1d] hover:bg-slate-800 border-none text-white text-[21px] font-normal">
//             Add to Stack
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DevStackCard;

// // import { FaStar} from "react-icons/fa6";
// // import type { IDevStackType } from "../../types/DevStackType";
// // // import { Bounce, toast } from "react-toastify";

// // interface IDevStackCardProps {
// //   devStack: IDevStackType;
// // }

// // const DevStackCard = ({ devStack }: IDevStackCardProps) => {
// //   console.log(devStack);
// //   return (

// //     <div className=" card w-full max-w-120.5 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-2xl transition-shadow duration-300">
// //       {/* Card Section */}
// //       <div className="card-body p-8">
// //         {/* Logo and Badge Section */}
// //         <div className="flex items-start justify-between">
// //           {/* Icon */}
// //           <div className="w-16 h-16 flex items-center justify-center">
// //             <img
// //               src={devStack.icon}
// //               alt={devStack.name}
// //               className="w-12 h-12 object-contain"
// //             />
// //           </div>

// //           {/* Badge */}
// //           <span className="badge badge-lg rounded-full bg-sky-50 border border-sky-100 text-sky-500 px-5 py-4 font-medium">
// //             {devStack.badge}
// //           </span>
// //         </div>

// //         {/* Title */}
// //         <h2 className="text-[34px] leading-tight font-bold text-slate-900 mt-5">
// //           {devStack.name}
// //         </h2>

// //         {/* Description */}
// //         <p className="text-[21px] leading-[1.7] text-slate-500 mt-3 min-h-26.25">
// //           {devStack.description}
// //         </p>

// //         {/* Category, Difficulty, Rating Section */}
// //         <div className="flex items-center justify-between gap-3 mt-6 pt-4">
// //           {/* Category */}
// //           <span className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-[17px]">
// //             {devStack.category}
// //           </span>

// //           {/* Difficulty */}
// //           <span className="text-slate-500 text-[17px]">
// //             {devStack.difficulty}
// //           </span>

// //           {/* Rating */}
// //           <div className="flex items-center gap-2 text-slate-700 text-[17px]">
// //             <span className="text-yellow-400 text-xl">
// //               <FaStar />
// //             </span>
// //             <span>{devStack.rating}</span>
// //           </div>
// //         </div>

// //         {/* Button */}
// //         <div className="card-actions mt-7">
// //           <button className="btn w-full h-16 min-h-0 rounded-[14px] bg-[#080d1d] hover:bg-slate-800 border-none text-white text-[21px] font-normal">
// //             Add to Stack
// //           </button>
// //         </div>
// //       </div>

// //     </div>
// //   );
// // };

// // export default DevStackCard;
