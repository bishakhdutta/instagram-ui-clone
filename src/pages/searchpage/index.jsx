import React from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import GetPosts from "../../context/PostContext";
const Searchpage = () => {
  const [post, getPost] = GetPosts();

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
        {postRows.map((data) => {
          return (
            <div className="grid grid-cols-3">
              {data.map((elem) => {
                return elem;
              })}
            </div>
          );
        })}
      </>
    );
  };
  
  return (
    <main className="pb-12 relative">
      <div className="sticky top-0 w-full p-2 bg-white">
        <div className="flex gap-2 border rounded-md h-10 items-center p-2">
          <div>
            <SearchIcon />
          </div>
          <input className="outline-none w-full h-9" type="text" />
        </div>
      </div>
      <div className="">
        <PostGrid />
      </div>
    </main>
  );
};

export default Searchpage;
