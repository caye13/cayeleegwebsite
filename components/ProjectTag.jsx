import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-[#465f46] border-primary-500"
    : "text-red-950 border-red-950 hover:border-[#465f46]";
  return (
    <button
      className={`${buttonStyles} text-xl cursor-pointer projButton`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;