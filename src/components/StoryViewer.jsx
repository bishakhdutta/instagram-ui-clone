import React from "react";
import {Link} from "react-router-dom";
const StoryViewer = (props) => {
  return (
    <div className="w-full h-full bg-slate-800 text-white">
    <Link to="/instagram-ui-clone">
      <div className="insFont text-[25px]">
        Instagram
      </div>
      </Link>
      story of {props.name}
    </div>
  );
};

export default StoryViewer;
