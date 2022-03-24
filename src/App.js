import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Courses from "./Components/Courses/Courses";
import BuyCoffee from "./Components/BuyCoffee/BuyCoffee";
import NotFound from "./NotFound/NotFound";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" elememnt={<Header />}></Route>
        <Route path="courses" element={<Courses />}></Route>
        <Route path="coffee" element={<BuyCoffee />}></Route>
        <Route path="*" element={<NotFound />}></Route>

      </Routes>
    </div>
  );
}

export default App;
