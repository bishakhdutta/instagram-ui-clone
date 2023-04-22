import { useRef, useState } from "react";
import { useEffect } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
const Storypage = ({ callback }) => {
  const navigate = useNavigate();
  const goBack=()=>{
    callback(false);
    navigate('/instagram-ui-clone');
  }
  useEffect(() => {
    callback(true);
    window.addEventListener('popstate',goBack);
    return ()=> window.removeEventListener('popstate',goBack)
  }, []);
  const location = useLocation();
  const data = location?.state;
  const [user, setUser] = useState(data);

  return (
    <div className="flex flex-col h-full max-w-[450px]">
      {/* <div className="w-full text-black ">
        <Link onClick={()=>callback(false)} to="/instagram-ui-clone">
          <div className="insFont text-[25px]">Instagram</div>
        </Link>
      </div> */}
      <Outlet context={[user, setUser,goBack]} />
    </div>
  );
};

export default Storypage;
