import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import NavbarMain from "./components/navbar/NavbarMain";
import Home from "./pages/Home/Home";
import Savat from "./pages/savat/Savat";
import Taqqoslash from "./pages/taqqoslash/Taqqoslash";
import Kirish from "./pages/kirish/Kirish";
import Sevimlilar from "./pages/sevimlilar/Sevimlilar";
import FooterMain from "./components/footer/FooterMain";
import SingleCard from "./pages/SingleCard/SingleCard";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const location = useLocation();

  if (location.pathname.includes("/kirish")) {
    return <Kirish />;
  }

  return (
    <div>
      <NavbarMain />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/savat" element={<Savat />} />
        <Route path="/taqqoslash" element={<Taqqoslash />} />
        <Route path="/sevimlilar" element={<Sevimlilar />} />
        <Route path="/product/:id" element={<SingleCard />} />
      </Routes>
      <FooterMain />
      <ToastContainer />
    </div>
  );
}

export default App;
