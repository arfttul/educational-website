import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Courses from "./Components/Courses/Courses";
import BuyCoffee from "./Components/BuyCoffee/BuyCoffee";
import NotFound from "./NotFound/NotFound";
import Footer from "./Footer/Footer";
import Banner from "./Components/Banner/Banner";

function App() {
  return (
    <div className="relative">
      <Header />
      <Routes>
        <Route path="/" elememnt={<Header />}></Route>
        <Route path="courses" element={<Courses />}></Route>
        <Route path="coffee" element={<BuyCoffee />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
