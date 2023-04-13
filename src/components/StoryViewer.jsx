import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import LoopIcon from '@mui/icons-material/Loop';
const StoryViewer = () => {
  const { storyid } = useParams();
  const [media, setMedia] = useOutletContext();
  const [loading, setLoading] = useState(true);
  const [post, getPost] = useApi(
    `https://dummyapi.io/data/v1/post/${storyid}`,
    setLoading
  );
  useEffect(() => {
    getPost(`https://dummyapi.io/data/v1/post/${storyid}`);
  }, [storyid]);
  useEffect(() => {
    let timeout;
    if (!loading) {
      timeout = setTimeout(() => {
        setMedia(media + 1);
      }, [5000]);
    }
    return () => clearTimeout(timeout);
  }, [loading]);
  return (
    <div className="h-full">
      {loading ? (
        <div className="bg-slate-700 w-full h-full flex justify-center items-center">
          <span className="animate-spin">
            <LoopIcon sx={{fontSize:'35px',color:'grey'}} />
          </span>
        </div>
      ) : (
        <img src={post?.image} />
      )}
    </div>
  );
};

export default StoryViewer;
