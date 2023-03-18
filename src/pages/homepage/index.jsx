import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ThemeSet from "../../context/ThemeContext";
import Story from "../../components/Story";
import Post from "../../components/Post";
import { useApi } from "../../hooks/useApi";
const Homepage = () => {
  const [theme, setTheme] = ThemeSet();
  const style = {
    color: theme == "light" ? "black" : "white",
    background: theme == "light" ? "white" : "black",
  };
  const [pages, setPages] = useState(1);
  const [storyJSON, getStoryJSON] = useApi(
    `https://dummyapi.io/data/v1/user?limit=${20 * pages}`
  );
  const [postJSON, getPostJSON] = useApi(
    `https://dummyapi.io/data/v1/post?limit=${20 * pages}`
  );
  const loadOnScroll = () => {
    let scrollDistance = Math.ceil(
      window.innerHeight + document.documentElement.scrollTop
    );
    let scrollLimit = document.documentElement.offsetHeight;
    if (scrollDistance >= scrollLimit - 1) {
      setPages(pages + 1);
      return;
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", loadOnScroll);
    getPostJSON(`https://dummyapi.io/data/v1/post?limit=${20 * pages}`);
    return () => window.removeEventListener("scroll", loadOnScroll);
  }, [pages]);

  return (
    <main style={style} className="pb-14">
      <nav className="z-30 top-0 bg-white flex justify-between px-4 h-12 w-screen max-w-[450px] items-center border-b-2 fixed">
        <div className="flex insFont gap-2 text-[25px] items-center">
          Instagram
          <KeyboardArrowDownIcon />
        </div>
        <div className="flex items-center gap-4">
          <div className="border-2 border-black rounded-lg w-6 h-6 grid place-content-center">
            <AddIcon />
          </div>
          <div className="relative">
            <div className="bg-[var(--ired)] w-[10px] h-[10px] rounded-[50%] absolute -right-[1px] top-[1px] border border-white"></div>
            <FavoriteBorderIcon sx={{ fontSize: "28px" }} />
          </div>
        </div>
      </nav>
      <section className="select-none overflow-hidden h-[100px] w-screen max-w-[450px] mt-12">
        <div className="flex gap-2 p-2 w-full h-fit overflow-auto scrollbar-none">
          {storyJSON.map((data) => {
            return (
              <Story
                usrname={`${data.firstName}_${data.lastName}`}
                url={data.picture}
                key={data.id}
              />
            );
          })}
        </div>
      </section>
      <section className="flex flex-col gap-4">
        {postJSON.map((data) => {
          return (
            <Post
              id={data.id}
              key={data.id}
              url={data.image}
              caption={data.text}
              likes={data.likes}
              usr={`${data.owner.firstName}_${data.owner.lastName}`}
              profile={data.owner.picture}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Homepage;
