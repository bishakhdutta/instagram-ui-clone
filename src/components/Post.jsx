import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import TelegramIcon from "@mui/icons-material/Telegram";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useRef, useState } from "react";
import { useApi } from "../hooks/useApi";
import MultiMedia from "./MultiMedia";
const Post = ({ id, url, caption, likes, usr, profile }) => {
  const [comments, getComments] = useApi(
    `https://dummyapi.io/data/v1/post/${id}/comment`
  );
  const [saveToggle, setSaveToggle] = useState(false);
  const [saveIcon, setSaveIcon] = useState(
    <BookmarkBorderIcon sx={{ fontSize: "32px" }} />
  );
  const [likeData, setLikeData] = useState({
    state: false,
    like: likes,
    likeIcon: <FavoriteBorderIcon sx={{ fontSize: "32px" }} />,
  });

  const saveClickHandler = () => {
    if (saveToggle == false) {
      setSaveToggle(true);
      setSaveIcon(<BookmarkIcon sx={{ fontSize: "32px" }} />);
    } else {
      setSaveToggle(false);
      setSaveIcon(<BookmarkBorderIcon sx={{ fontSize: "32px" }} />);
    }
  };
  const dblLikeRef = useRef(null);
  const likeClickHandler = (clickCount) => {
    if (clickCount == 2) {
      dblLikeRef.current.classList.remove("hidden");
      dblLikeRef.current.classList.add("animate-dblLike");
      console.log(dblLikeRef.current.classList);
      setTimeout(() => {
        dblLikeRef.current.classList.remove("animate-dblLike");
        dblLikeRef.current.classList.add("hidden");
      }, 700);
    }
    if (likeData.state == false) {
      setLikeData({
        ...likeData,
        state: true,
        like: likeData.like + 1,
        likeIcon: (
          <FavoriteIcon
            className="text-[var(--ired)] animate-like"
            sx={{ fontSize: "32px" }}
          />
        ),
      });
    } else {
      if (clickCount == 1) {
        setLikeData({
          ...likeData,
          state: false,
          like: likeData.like - 1,
          likeIcon: <FavoriteBorderIcon sx={{ fontSize: "32px" }} />,
        });
      }
    }
  };
  return (
    <div className="p-1 text-[14px]">
      <div className="flex justify-between p-2 items-center">
        <div className="flex items-center gap-2">
          <img
            className="bg-slate-400 w-8 h-8 rounded-[50%] object-cover"
            src={profile}
          />
          <div className="font-bold">{usr}</div>
        </div>
        <MoreHorizIcon />
      </div>
      <div className="p-1 z-10 relative flex justify-center items-center">
        <span ref={dblLikeRef} className="absolute hidden z-10">
          <FavoriteIcon className="text-white" sx={{ fontSize: "80px" }} />
        </span>
        {/* <img
          className="w-full bg-slate-400 rounded-md object-cover object-center"
          src={url}
        /> */}
        <MultiMedia
          media={[url, url, url]}
          type="img"
          callback={likeClickHandler}
        />
      </div>
      <div className="flex justify-between px-2 py-1">
        <div className="flex items-center gap-3">
          <div onClick={() => likeClickHandler(1)}>{likeData.likeIcon}</div>
          <div>
            <ChatBubbleOutlineIcon sx={{ fontSize: "32px" }} />
          </div>
          <div>
            <TelegramIcon sx={{ fontSize: "32px" }} />
          </div>
        </div>
        <div onClick={saveClickHandler}>{saveIcon}</div>
      </div>
      <div className="flex flex-col gap-[2px]">
        <div className="font-bold px-3">{likeData.like} likes</div>
        <div className="px-3">
          <span className="font-bold">{usr} </span>
          {caption}
        </div>
        <div className="px-3 text-slate-500 text-[14px]">
          {(() => {
            if (comments.length > 2) {
              return <span>View all {comments.length} commnets</span>;
            }
          })()}
        </div>
        <div className="px-3 text-[13px]">
          {comments.map((data, i) => {
            if (i > 1) return;
            return (
              <div key={i}>
                <span className="font-bold">
                  {data.owner.firstName}_{data.owner.lastName}{" "}
                </span>
                {data.message}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Post;
