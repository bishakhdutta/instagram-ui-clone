import React, { useEffect, useRef, useState } from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import {isMobile} from 'react-device-detect';
const MultiMedia = ({ media, type, callback }) => {
  const postRef = useRef(null);
  const swiper = useRef(null);
  const [index, setIndex] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const [hover, setHover] = useState(false);
  const style = {
    display: hover ? "flex" : "none",
  };
  const mobileStyle={
    overflowX:(isMobile)?'auto':'unset',
  }
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
      if (index > 1) {
        swiper.current.style.transform = `translateX(-${
          (index - 1) * (imgWidth + 2)
        }px)`;
      } else {
        swiper.current.style.transform = `translateX(${
          (index - 1) * (imgWidth - 2)
        }px)`;
      }
    } else if (direction == "right" && index < media.length - 1) {
      setIndex(index + 1);
      swiper.current.style.transform = `translateX(-${
        (index + 1) * (imgWidth + 2)
      }px)`;
    }
  };
  useEffect(() => {
    setImgWidth(postRef.current.offsetWidth);
  }, []);
  if (type == "img") {
    return (
      <div
        onMouseOver={() => {if(!isMobile)setHover(true)}}
        onMouseOut={() => {if(!isMobile)setHover(false)}}
        ref={postRef}
        className="w-full overflow-hidden relative flex items-center"
      >
        <div
          style={style}
          onClick={() => swipe("left")}
          className="z-20 absolute left-2 w-5 h-5 rounded-[50%] bg-white flex justify-center items-center"
        >
          <ArrowLeftIcon />
        </div>
        <div
          style={style}
          onClick={() => swipe("right")}
          className="z-20 absolute right-2 w-5 h-5 rounded-[50%] bg-white flex justify-center items-center"
        >
          <ArrowRightIcon />
        </div>
        <div className="min-w-full w-fit flex overflow-hidden scroll flex-nowrap gap-[2px]">
          <span
          style={mobileStyle}
            ref={swiper}
            className="flex snap-x snap-mandatory scrollbar-none gap-[2px]"
          >
            {media.map((data, i) => {
              return (
                <img
                  onDoubleClick={() => callback(2)}
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
