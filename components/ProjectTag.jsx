// import React from "react";

// const ProjectTag = ({ name, onClick, isSelected }) => {
//   const buttonStyles = isSelected
//     ? "text-[#465f46] border-primary-500"
//     : "text-red-950 border-red-950 hover:border-[#465f46]";
//   return (
//     <button
//       className={`${buttonStyles} text-xl cursor-pointer projButton`}
//       onClick={() => onClick(name)}
//     >
//       {name}
//     </button>
//   );
// };

// export default ProjectTag;
import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const baseClasses = "text-xl cursor-pointer projButton border-2 px-6 py-3 rounded-full transition-all duration-300";
  const hoverClasses = "hover:bg-[#450a0a] hover:text-white hover:border-[#450a0a]";
  const unselectedClasses = "text-red-950 border-red-950";
  const tailwindClasses = isSelected
    ? `${baseClasses}`
    : `${baseClasses} ${unselectedClasses} ${hoverClasses}`;

  const inlineStyles = isSelected
    ? { 
        backgroundColor: '#450a0a',
        color: 'white',
        borderColor: '#450a0a'
      }
    : {}; 

  return (
    <button
      className={tailwindClasses}
      style={inlineStyles} 
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;