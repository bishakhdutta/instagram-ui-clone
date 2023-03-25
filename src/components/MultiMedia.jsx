import React, { useEffect, useRef, useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

// import { isMobile } from "react-device-detect";
const MultiMedia = ({ media, type, callback }) => {
  const postRef = useRef(null);
  const swiper = useRef(null);
  const [index, setIndex] = useState(0);
  const [imgWidth, setImgWidth] = useState(0);
  const [touchStartPos, setTouchStartPos] = useState(0);
  const [translate, setTranslate] = useState(0);
  useEffect(() => {
    setImgWidth(postRef.current.offsetWidth);
  }, []);
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
        setTranslate(-((index - 1) * (imgWidth + 2)));
      } else {
        swiper.current.style.transform = `translateX(${
          (index - 1) * (imgWidth - 2)
        }px)`;
        setTranslate((index - 1) * (imgWidth - 2));
      }
    } else if (direction == "right" && index < media.length - 1) {
      setIndex(index + 1);
      swiper.current.style.transform = `translateX(-${
        (index + 1) * (imgWidth + 2)
      }px)`;
      setTranslate(-((index + 1) * (imgWidth + 2)));
    }else{
      swiper.current.style.transform = `translateX(-${
        (index) * (imgWidth+2)
      }px)`;
    }
  };
  
  const touchStartHandler = (e) => {
    swiper.current.classList.remove("duration-300");
    setTouchStartPos(e.touches[0].screenX);
  };
  const touchEndHandler = (e) => {
    swiper.current.classList.add("duration-300");
    let touchEndPos = e.changedTouches[0].screenX;
    if (touchEndPos > touchStartPos && index > 0) {
      let move_percentage = ((touchEndPos-touchStartPos)*100)/imgWidth;
      if(move_percentage>10){
        swipe("left");
      }else{
        swipe(null);
      }
    } else if (touchEndPos < touchStartPos && index < media.length - 1) {
      let move_percentage = ((touchStartPos-touchEndPos)*100)/imgWidth;
      if(move_percentage>10){
        swipe("right");
      }else{
        swipe(null);
      }
    }
  };
  const touchMoveHandler = (e) => {
    let distance = -(touchStartPos - e.touches[0].screenX);
    let move = translate + distance;
    if (move <= 0 && move >= -((media.length - 1) * imgWidth)) {
      swiper.current.style.transform = `translateX(${move}px)`;
    }
  };
  if (type == "img") {
    return (
      <div
        ref={postRef}
        className="w-full bg-black overflow-hidden relative rounded-md flex items-center"
      >
        <div
          onClick={() => swipe("left")}
          className={`${(index==0)?"opacity-40":"opacity-80"} z-20 absolute left-2 w-5 h-5 shadow-1 rounded-[50%] bg-[#FAFAFA] flex justify-center items-center`}
        >
          <ChevronLeftIcon className="mr-[1px]" />
        </div>
        <div
          onClick={() => swipe("right")}
          className={`${(index==media.length-1)?"opacity-40":"opacity-80"} z-20 absolute right-2 w-5 h-5 shadow-1 rounded-[50%] bg-[#FAFAFA] flex justify-center items-center`}
        >
          <ChevronRightIcon className="ml-[1px]" />
        </div>
        <div className="min-w-full w-fit max-h-[450px] flex overflow-hidden scroll gap-[2px]">
          <div
            onTouchStart={(e) => touchStartHandler(e)}
            onTouchEnd={(e) => touchEndHandler(e)}
            onTouchMove={(e) => touchMoveHandler(e)}
            ref={swiper}
            className="flex min-w-full w-fit duration-300 flex-nowrap gap-[2px]"
          >
            {media.map((data, i) => {
  
              return (
                <div className="min-w-full w-fit flex-shrink-0 flex justify-center">
                  <img
                    onDoubleClick={() => callback(2)}
                    key={"imgId"+i}
                    src={data}
                    alt="image"
                    className="flex-shrink-0 object-contain object-center"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="absolute bottom-2 w-full flex justify-center gap-1">
          {media.map((elem, i) => {
            return (
              <div
                key={"dots"+i}
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
