import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import GetDiscoverPosts from "../../context/DiscoverContext";
const Searchpage = () => {
  const [post, getPost] = GetDiscoverPosts();
  const [explore, setExplore] = useState(false);
  const inputRef = useRef(null);
  const exploreFoucs = () => {
    setExplore(!explore);
    inputRef.current.focus();
  };
  const PostGrid = () => {
    const postRows = [];
    let rows = Math.ceil(post.length / 5);
    for (let i = 0; i < rows; i++) {
      let startIndex = i * 5;
      let endIndex = startIndex + 4;
      let grid = [];
      for (let j = startIndex; j <= endIndex; j++) {
        let data = post[j];
        let postClass = "aspect-square";
        if (i % 2 == 0 && j == startIndex) {
          postClass = "row-span-0 col-span-left";
        } else if (i % 2 != 0 && j == endIndex) {
          postClass = "row-span-0 col-span-right";
        }
        grid.push(
          <div className={postClass}>
            <img
              className=" border border-white h-full w-full object-cover object-center"
              src={data.image}
            />
          </div>
        );
      }
      postRows.push(grid);
    }
    return (
      <>
        {postRows?.map((data) => {
          return (
            <div className="grid grid-cols-3">
              {data?.map((elem) => {
                return elem;
              })}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <main className="pb-12 relative flex flex-col h-full">
      <div className="w-full p-2 bg-white border-b">
        <div
          onClick={exploreFoucs}
          className="flex gap-2 border rounded-md h-10 items-center p-2 justify-center"
        >
          <div>
            <SearchIcon />
          </div>
          <input
            ref={inputRef}
            className={`${explore ? "w-full" : "w-16"} outline-none h-9 duration-150`}
            type="text"
            placeholder="Explore..."
            onBlur={()=>setExplore(false)}
          />
        </div>
      </div>
      <div className="flex-1 max-h-[calc(100vh-108px)] overflow-auto scrollbar-none">
        <div>
          <PostGrid />
        </div>
      </div>
    </main>
  );
};

export default Searchpage;
