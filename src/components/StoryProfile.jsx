import React, { useEffect, useState } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
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
  const [user, setUser, goBack] = useOutletContext();
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
    if (stories.length == media) {
      goBack();
    }
  }, [stories, media]);
  return (
    <div className="w-full flex flex-col flex-1 bg-slate-900 text-white">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2 py-2">
          <div className="w-8 aspect-square rounded-full overflow-hidden">
            <img className="object-cover" src={userInfo?.picture} alt="dp" />
          </div>
          {user?.usrname}
        </div>
        <MoreHorizIcon />
      </div>
      <div className="flex gap-1 px-1 py-2">
        {stories?.map((data, i) => {
          return <StoryTimer key={i} i={i} j={media} />;
        })}
      </div>
      <div className="absolute w-full h-full flex">
        <div className="flex-1" onClick={() => setMedia(media - 1)}></div>
        <div className="flex-1" onClick={() => setMedia(media + 1)}></div>
      </div>
      <Outlet context={[media, setMedia]} />
      <div className="absolute gap-2 p-2 bottom-0 h-16 w-full flex items-center justify-evenly bg-black">
        <input
          className="flex-1 px-2 outline-none bg-transparent border border-white h-[95%] rounded-full"
          type="text"
          placeholder="send a message"
        />
        <FavoriteBorderIcon className="flex-[0.2]" />
        <TelegramIcon className="flex-[0.2]" />
      </div>
    </div>
  );
};
const StoryTimer = ({ i, j }) => {
  const style = {
    background: "linear-gradient(to right, white 50%, #999999 50%)",
    backgroundSize: "200% 100%",
    backgroundPosition: "right bottom",
  };
  return (
    <div
      style={style}
      className={`${
        j >= i ? "animate-timer" : ""
      } flex-1 rounded-md h-1 bg-right-bottom`}
    ></div>
  );
};
export default StoryProfile;
