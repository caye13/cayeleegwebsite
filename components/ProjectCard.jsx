// import React from "react";
// import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
// import Link from "next/link";

// const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
//   return (
//     <div>
//       <div
//         className="h-52 md:h-72 rounded-t-xl relative group"
//         style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
//       >
//         <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full bg-red-950 bg-opacity-0 opacity-0 group-hover:opacity-100 transition-all duration-500 gap-8">
//           <Link
//             href={gitUrl}
//             className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#FBF7F3] hover:border-[#221516] group/link"
//           >
//             <CodeBracketIcon className="h-10 w-10 text-[#FBF7F3] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-[#221516]" />
//           </Link>
//           <Link
//             href={previewUrl}
//             className="h-14 w-14 border-2 relative rounded-full border-[#FBF7F3] hover:border-[#221516] group/link"
//           >
//             <EyeIcon className="h-10 w-10 text-[#FBF7F3] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-[#221516]" />
//           </Link>
//         </div>
//       </div>
//       <div className="text-red-950 rounded-b-xl mt-3 py-6 px-4">
//         <h5 className="text-xl font-semibold mb-2">{title}</h5>
//         <p className="text-[#221516]">{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;
import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="group">
      <div
        className="h-52 md:h-78 rounded-t-xl relative overflow-hidden"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-[#5A4D4A]/78 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-8">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#FBF7F3] hover:border-[#221516] group/link"
            target="_blank"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#FBF7F3] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#221516]" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#FBF7F3] hover:border-[#221516] group/link"
            target="_blank"
          >
            <EyeIcon className="h-10 w-10 text-[#FBF7F3] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-[#221516]" />
          </Link>
        </div>
      </div>
      <div className="text-red-950 rounded-b-xl mt-3 py-6 px-4">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-[#221516] text-lg">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;