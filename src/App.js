import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Components/Courses/Courses";
import BuyCoffee from "./Components/BuyCoffee/BuyCoffee";
import NotFound from "./NotFound/NotFound";
import Footer from "./Footer/Footer";
import Banner from "./Components/Banner/Banner";
import WebDev from "./Components/Courses/WebDev";
import Academic from "./Components/Courses/Academic";
import AppDev from "./Components/Courses/AppDev";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header />
      <div className="grow">
        <Routes>
          <Route path="home" elememnt={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="web-development" element={<WebDev />} />
          <Route path="academic-courses" element={<Academic />} />
          <Route path="app-development" element={<AppDev />} />
          <Route path="support" element={<BuyCoffee />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
