import React, { useEffect, useRef, useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
const MultiMedia = ({ media, type }) => {
  const postRef = useRef(null);
  const swiper = useRef(null);
  const [index, setIndex] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const [hover, setHover] = useState(false);
  const style = {
    display: hover ? "flex" : "none",
  };
  const activIndex = (i) => {
    if (i == index) {
      return "bg-white";
    } else {
      return "bg-slate-400";
    }
  };
  const swipe = (direction) => {
    if (direction == "left" && index > 0) {
      setIndex(index - 1);
      swiper.current.style.transform = `translateX(${
        (index - 1) * imgWidth
      }px)`;
    } else if (direction == "right" && index < media.length - 1) {
      setIndex(index + 1);
      swiper.current.style.transform = `translateX(-${
        (index + 1) * imgWidth
      }px)`;
    }
  };
  useEffect(() => {
    setImgWidth(postRef.current.offsetWidth);
  }, []);
  if (type == "img") {
    return (
      <div
      onMouseOver={()=>setHover(true)}
      onMouseOut={()=>setHover(false)}
        ref={postRef}
        className="w-full overflow-hidden relative flex items-center"
      >
        <div
          style={style}
          onClick={() => swipe("left")}
          className="z-10 absolute left-2 w-5 h-5 rounded-[50%] bg-white flex justify-center items-center"
        >
          <ArrowLeftIcon />
        </div>
        <div
          style={style}
          onClick={() => swipe("right")}
          className="z-10 absolute right-2 w-5 h-5 rounded-[50%] bg-white flex justify-center items-center"
        >
          <ArrowRightIcon />
        </div>
        <div className="min-w-full w-fit flex overflow-hidden scroll flex-nowrap gap-[2px]">
          <span ref={swiper} className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none">
            {media.map((data, i) => {
              return (
                <img
                  key={i}
                  src={data}
                  alt="image"
                  className="snap-center flex-shrink-0 bg-slate-400 rounded-md object-cover object-center"
                />
              );
            })}
          </span>
        </div>
        <div
          style={style}
          className="absolute bottom-2 w-full flex justify-center gap-1"
        >
          {media.map((elem, i) => {
            return (
              <div
                key={i}
                className={`w-3 h-3 rounded-[50%] ${activIndex(i)}`}
              ></div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <div>video</div>;
  }
};

export default MultiMedia;
