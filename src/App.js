import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/index";
import Notificationpage from "./pages/notification/index";
import Searchpage from "./pages/searchpage/index";
import { ThemeContext } from "./context/ThemeContext";
import Bottomnav from "./components/Bottomnav";
function App() {
  return (
    <div className="flex justify-center bg-black min-h-screen">
      <div className="w-[450px] bg-white relative">
        <ThemeContext>
          <BrowserRouter>
            <Routes>
              <Route path="/" index element={<Homepage />} />
              <Route element={<Notificationpage />} />
              <Route element={<Searchpage />} />
            </Routes>
            <Bottomnav/>
          </BrowserRouter>
        </ThemeContext>
      </div>
    </div>
  );
}
export default App;
