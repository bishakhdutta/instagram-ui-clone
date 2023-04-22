import React from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import GridOnIcon from '@mui/icons-material/GridOn';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import PortraitIcon from '@mui/icons-material/Portrait';
import Post from "../../components/Post";
import { useParams } from "react-router-dom";
const Profile = () => {
    const {name}=useParams();
  return (
    <div className="mb-12">
      <nav className="border text-lg font-medium fixed bg-white w-full top-0 flex justify-center items-center h-10">
        <ArrowBackIosNewIcon className="absolute left-2"/>
        {name}
      </nav>
      <main className="mt-10">
        <div className="p-3">
        <header className="flex py-2 gap-6 items-center">
          <div className="w-[85px] h-[85px] rounded-full overflow-hidden">
            <img alt="" src="https://www.morningpic.com/wp-content/uploads/2022/12/1_Happy-Dp-for-Whatsapp-1-1024x1024.jpg" />
          </div>
          <div className="flex-1">
            <section className="flex gap-4 items-center">
              <div className="text-2xl">{name}</div>
              <span><MoreHorizIcon/></span>
            </section>
            <section className="flex gap-3 mt-2">
              <ButtonRect>Follow <KeyboardArrowDownIcon/></ButtonRect>
              <ButtonRect>Message</ButtonRect>
              <ButtonRect><PersonAddIcon/></ButtonRect>
            </section>
          </div>
        </header>
        <section>
            <div className="font-medium">Bishakh Dutta</div>
            <div className="whitespace-pre-line">Human</div>
        </section>
        <section className="py-2 text-[13px]">
            <span className="text-slate-500 font-medium">Followed by&nbsp;</span>
            <span className="font-medium">hellohello, byebye</span>
        </section>
        </div>
        <div className="border-t py-2">
          <ul className="flex">
            <li className="flex-1 text-center">0<br/>post</li>
            <li className="flex-1 text-center">0<br/> followers</li>
            <li className="flex-1 text-center">0<br/> following</li>
          </ul>
        </div>
        <div className="border py-3">
          <ul className="flex">
            <li className="flex-1 flex justify-center"><GridOnIcon className="text-slate-600" /></li>
            <li className="flex-1 flex justify-center"><BackupTableIcon className="text-slate-600" /></li>
            <li className="flex-1 flex justify-center"><PortraitIcon className="text-slate-600" /></li>
          </ul>
        </div>
        <section>
            <GridView/>
            {/* <Feed/> */}
        </section>
      </main>
    </div>
  );
};

const ButtonRect = ({ children }) => {
  return <div className="bg-[#efefef] text-black px-2 py-1 rounded-lg">{children}</div>;
};

const GridView=()=>{
  return(
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
}
const Feed=()=>{
  return(
    <div>
      {/* <Post/> */}
      post
    </div>
  );
}
export default Profile;
