import React from "react";
import { Link } from "react-router-dom";

const Story = ({ usrname, url }) => {
  return (
    <Link to={`/story/${usrname}`}>
      <div className="w-16 h-fit flex flex-col items-center cursor-pointer pointer-events-none">
        <div className="w-[60px] h-[60px] rounded-[50%] grid place-content-center bg-gradient-to-tr from-[#FDE047] via-[#fa7e1e]  to-[#F43F5E]">
          <div className="w-14 h-14 rounded-[50%] overflow-hidden border-[3px] border-white">
            <img className="h-full w-full object-cover" src={url} alt="" />
          </div>
        </div>
        <div className="w-full whitespace-nowrap text-ellipsis overflow-hidden text-[14px]">
          {usrname}
        </div>
      </div>
    </Link>
  );
};

export default Story;
