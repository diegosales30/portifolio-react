import { Route, Routes } from "react-router-dom";
import About from "../pages/About";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      {/* <Route path="/about" element={<h1>Technology</h1>} />
      <Route path="/contact" element={<h1>Project</h1>} />
      <Route path="/contact" element={<h1>Contact</h1>} /> */}
    </Routes>
  );
};

export default Routers;
