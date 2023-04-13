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
  const [userInfo, getUserInfo] = useApi(
    `https://dummyapi.io/data/v1/user/${user?.userid}`
  );
  const [media, setMedia] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    if (stories[media]?.id) {
      navigate(
        `/instagram-ui-clone/story/${user?.usrname}/${stories[media]?.id}`
      );
    }
  }, [stories, media]);
  return (
    <div className="w-full h-full bg-slate-800 text-white">
      <div className="flex items-center gap-2 p-1">
        <div className="w-8 aspect-square rounded-[50%] overflow-hidden">
          <img className="object-cover" src={userInfo?.picture} alt="dp" />
        </div>
        {user?.usrname}
      </div>
      <div className="flex gap-1 px-1 py-2">
        {stories?.map((data, i) => {
          return (
            <div
              key={i}
              className={`${
                media >= i ? "bg-white" : "bg-slate-500"
              } flex-1 h-1 rounded-md`}
            ></div>
          );
        })}
      </div>
      <Outlet context={[media, setMedia]} />
    </div>
  );
};

export default StoryProfile;
