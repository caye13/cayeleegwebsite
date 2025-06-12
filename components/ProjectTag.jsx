import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-[#465f46] border-primary-500"
    : "text-red-950 border-red-950 hover:border-[#465f46]";
  return (
    <button
      className={`${buttonStyles} rounded-full border-5 px-5 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;