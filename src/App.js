import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
// import SlideRoutes from 'react-slide-routes';
import "./App.css";
import Homepage from "./pages/homepage/index";
import Notificationpage from "./pages/notification/index";
import Searchpage from "./pages/searchpage/index";
import Bottomnav from "./components/Bottomnav";
import StoryProfile from "./components/StoryProfile";
import { ContextWrapper } from "./context/ContextWrapper";
import Storypage from "./pages/storypage";
import StoryViewer from "./components/StoryViewer";
import { useEffect, useState, useRef } from "react";
import Profile from "./pages/profilepage";
function App() {
  const location = useLocation();
  const ref = useRef(null);
  const [fullscreen, setFullScreen] = useState(false);
  useEffect(() => {
    if (fullscreen) {
      ref.current.requestFullscreen();
    } else {
      try {
        document.exitFullscreen();
      } catch (error) {}
    }
  }, [fullscreen]);
  return (
    <div ref={ref} className="flex justify-center bg-black min-h-screen">
      <div className="w-[450px] bg-white relative">
        <ContextWrapper>
          <BrowserRouter>
            <Routes location={location} key={location.pathname}>
              <Route path="/instagram-ui-clone" element={<Bottomnav />}>
                <Route index element={<Homepage />} />
                <Route element={<Notificationpage />} />
                <Route path="discover" element={<Searchpage />} />
                <Route path="/instagram-ui-clone/:name/*" element={<Profile/>} />
              </Route>
              <Route
                path="/instagram-ui-clone/story"
                element={<Storypage callback={setFullScreen} />}
              >
                <Route
                  path="/instagram-ui-clone/story/:name"
                  element={<StoryProfile />}
                >
                  <Route
                    path="/instagram-ui-clone/story/:name/:storyid"
                    element={<StoryViewer />}
                  />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </ContextWrapper>
      </div>
    </div>
  );
}
export default App;
