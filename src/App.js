import { BrowserRouter, Routes, Route,HashRouter } from "react-router-dom";
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
function App() {
  return (
    <div className="flex justify-center bg-black min-h-screen">
      <div className="w-[450px] bg-white relative">
        <ContextWrapper>
          <HashRouter>
            <Routes>
              <Route path="/instagram-ui-clone" element={<Bottomnav />}>
                <Route index element={<Homepage />} />
                <Route element={<Notificationpage />} />
                <Route
                  path="discover"
                  element={<Searchpage />}
                />
              </Route>
              <Route path="/instagram-ui-clone/story" element={<Storypage />}>
                <Route path="/instagram-ui-clone/story/:name" element={<StoryProfile/>}>
                  <Route path="/instagram-ui-clone/story/:name/:storyid" element={<StoryViewer/>} />
                </Route>
              </Route>
            </Routes>
          </HashRouter>
        </ContextWrapper>
      </div>
    </div>
  );
}
export default App;
