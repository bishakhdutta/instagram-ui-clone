import React, { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { useApi } from "../hooks/useApi";
const StoryProfile = () => {
  const [user, setUser] = useOutletContext();
  const [stories, getStories] = useApi(
    `https://dummyapi.io/data/v1/user/${user?.userid}/post`
  );
  const [media, setMedia] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (stories[media]?.id) {
      navigate(`/instagram-ui-clone/story/${user?.usrname}/${stories[media]?.id}`);
    }
    let interval = setInterval(() => {
      if(stories.length-1>=media)setMedia(media + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [stories,media]);
  return (
    <div className="w-full h-full bg-slate-800 text-white">
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default StoryProfile;
