import Layout from "components/Layout";
import DashBoard from "features/dashboard";
import Home from "features/home";
import Top from "features/login";
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
