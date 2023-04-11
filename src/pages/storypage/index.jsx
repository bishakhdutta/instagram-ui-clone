import { useRef, useState } from "react";
import { useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
const Storypage = () => {
  const story = useRef(null);
  // useEffect(() => {
  //   story.current.requestFullscreen();
  // }, []);
  const location = useLocation();
  const data = location?.state;
  const [user, setUser] = useState(data);

  return (
    <>
      <div ref={story} className="w-full text-black">
        <Link to="/instagram-ui-clone">
          <div className="insFont text-[25px]">Instagram</div>
        </Link>
      </div>
      <Outlet context={[user, setUser]} />
    </>
  );
};

export default Storypage;
