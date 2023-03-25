import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SlideRoutes from 'react-slide-routes';
import "./App.css";
import Homepage from "./pages/homepage/index";
import Notificationpage from "./pages/notification/index";
import Searchpage from "./pages/searchpage/index";
import Bottomnav from "./components/Bottomnav";
import StoryViewer from "./components/StoryViewer";
import { ContextWrapper } from "./context/ContextWrapper";

function App() {
  return (
    <div className="flex justify-center bg-black min-h-screen">
      <div className="w-[450px] bg-white relative">
        <ContextWrapper>
          <BrowserRouter>
            <Routes>
              <Route path="/instagram-ui-clone" element={<Bottomnav />}>
                <Route index element={<Homepage />} />
                <Route element={<Notificationpage />} />
                <Route
                  path="discover"
                  element={<Searchpage />}
                />
              </Route>
              <Route path="/story/:id" element={<StoryViewer name="bob" />} />
            </Routes>
          </BrowserRouter>
        </ContextWrapper>
      </div>
    </div>
  );
}
export default App;
