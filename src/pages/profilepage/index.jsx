import React, { useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import GridOnIcon from "@mui/icons-material/GridOn";
import BackupTableIcon from "@mui/icons-material/BackupTable";
import PortraitIcon from "@mui/icons-material/Portrait";
import Post from "../../components/Post";
import { Link, Route, Routes, useParams } from "react-router-dom";
import SlideRoutes from "react-slide-routes";
import { useApi } from "../../hooks/useApi";
import { useState } from "react";
const Profile = () => {
  const { name } = useParams();
  const [userData,setuserData]=useState(null);
  const [user,getUser]=useApi(`https://dummyapi.io/data/v1/user`);
  const findUser=(name)=>{
    let fullName = name.split('_');
    let userData;
    for(let i=0;i<user?.length;i++){
      if(fullName[0]==user[i]?.firstName&&fullName[1]==user[i]?.lastName){
        userData=user[i];
      }
    }
    return(userData)
  }
  useEffect(()=>{
    setuserData(findUser(name));
  },[user]);
  return (
    <div className="mb-12">
      <nav className="border max-w-[450px] text-lg font-medium fixed bg-white w-full top-0 flex justify-center items-center h-10">
        <div className="absolute left-2 h-full grid place-content-center" onClick={()=>history.back()}>
          <ArrowBackIosNewIcon />
        </div>
        {name}
      </nav>
      <main className="mt-10">
        <div className="p-3">
          <header className="flex py-2 gap-6 items-center">
            <div className="w-[85px] h-[85px] rounded-full overflow-hidden">
              <img
                alt=""
                src="https://www.morningpic.com/wp-content/uploads/2022/12/1_Happy-Dp-for-Whatsapp-1-1024x1024.jpg"
              />
            </div>
            <div className="flex-1">
              <section className="flex gap-4 items-center">
                <div className="text-2xl">{name}</div>
                <span>
                  <MoreHorizIcon />
                </span>
              </section>
              <section className="flex gap-3 mt-2">
                <ButtonRect>
                  Follow <KeyboardArrowDownIcon />
                </ButtonRect>
                <ButtonRect>Message</ButtonRect>
                <ButtonRect>
                  <PersonAddIcon />
                </ButtonRect>
              </section>
            </div>
          </header>
          <section>
            <div className="font-medium">Your Name</div>
            <div className="whitespace-pre-line">Human</div>
          </section>
          <section className="py-2 text-[13px]">
            <span className="text-slate-500 font-medium">
              Followed by&nbsp;
            </span>
            <span className="font-medium">hellohello, byebye</span>
          </section>
        </div>
        <div className="border-t py-2">
          <ul className="flex">
            <li className="flex-1 text-center">
              0<br />
              post
            </li>
            <li className="flex-1 text-center">
              0<br /> followers
            </li>
            <li className="flex-1 text-center">
              0<br /> following
            </li>
          </ul>
        </div>
        <div className="border py-3">
          <ul className="flex">
            <li className="flex-1 flex justify-center">
              <Link to={`/instagram-ui-clone/${name}/`}>
                <GridOnIcon className="text-slate-600" />
              </Link>
            </li>
            <li className="flex-1 flex justify-center">
              <Link to={`/instagram-ui-clone/${name}/feed`}>
                <BackupTableIcon className="text-slate-600" />
              </Link>
            </li>
            <li className="flex-1 flex justify-center">
              <Link to={`/instagram-ui-clone/${name}/tagged`}>
                <PortraitIcon className="text-slate-600" />
              </Link>
            </li>
          </ul>
        </div>
        <section>
          <SlideRoutes>
            <Route index element={<GridView />} />
            <Route path="feed" element={<Feed />} />
            <Route path="tagged" element={<Tagged />} />
          </SlideRoutes>
        </section>
      </main>
    </div>
  );
};

const ButtonRect = ({ children }) => {
  return (
    <div className="bg-[#efefef] text-black px-2 py-1 rounded-lg">
      {children}
    </div>
  );
};

const GridView = () => {
  return (
    <div className="grid gap-1">
      <div className="gap-1 grid grid-cols-3 grid-rows-1">
        <div className="bg-blue-400 aspect-square"></div>
        <div className="bg-red-400 aspect-square"></div>
        <div className="bg-green-400 aspect-square"></div>
      </div>
      <div className="gap-1 grid grid-cols-3 grid-rows-1">
        <div className="bg-green-400 aspect-square"></div>
        <div className="bg-blue-400 aspect-square"></div>
        <div className="bg-red-400 aspect-square"></div>
      </div>
      <div className="gap-1 grid grid-cols-3 grid-rows-1">
        <div className="bg-red-400 aspect-square"></div>
        <div className="bg-green-400 aspect-square"></div>
        <div className="bg-blue-400 aspect-square"></div>
      </div>
      <div className="gap-1 grid grid-cols-3 grid-rows-1">
        <div className="bg-blue-400 aspect-square"></div>
        <div className="bg-red-400 aspect-square"></div>
        <div className="bg-green-400 aspect-square"></div>
      </div>
    </div>
  );
};
const Feed = ({posts}) => {
  return (
    <div className="bg-red-200">
      {/* <Post/> */}
      post
    
    </div>
  );
};
const Tagged = () => {
  return <div className="bg-yellow-200">tagged</div>;
};
export default Profile;
