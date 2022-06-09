import Layout from "components/Layout";
import DashBoard from "pages/dashboard";
import Home from "pages/home";
import Top from "pages/index";
import { Routes, Route } from "react-router-dom";

const Routing = (): JSX.Element => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Top />} />
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Route>
    </Routes>
  );
};

export default Routing;
