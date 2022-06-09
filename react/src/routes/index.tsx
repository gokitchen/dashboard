import Home from "pages/home";
import Top from "pages/index";
import { Routes, Route } from "react-router-dom";

const Routing = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Top />}></Route>
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default Routing;
