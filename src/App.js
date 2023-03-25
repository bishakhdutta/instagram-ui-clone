import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/index";
import Notificationpage from "./pages/notification/index";
import Searchpage from "./pages/searchpage/index";
import { ThemeContext } from "./context/ThemeContext";
import Bottomnav from "./components/Bottomnav";
import StoryViewer from "./components/StoryViewer";
import { PostContext } from "./context/PostContext";
import { StoryContext } from "./context/StoryContext"
function App() {
  return (
    <div className="flex justify-center bg-black min-h-screen">
      <div className="w-[450px] bg-white relative">
        <PostContext>
          <StoryContext>
            <ThemeContext>
              <BrowserRouter>
                <Routes>
                  <Route path="/instagram-ui-clone" element={<Bottomnav />}>
                    <Route index element={<Homepage />} />
                    <Route element={<Notificationpage />} />
                    <Route
                      path="/instagram-ui-clone/discover"
                      element={<Searchpage />}
                    />
                  </Route>
                  <Route
                    path="/story/:id"
                    element={<StoryViewer name="bob" />}
                  />
                </Routes>
              </BrowserRouter>
            </ThemeContext>
          </StoryContext>
        </PostContext>
      </div>
    </div>
  );
}
export default App;
