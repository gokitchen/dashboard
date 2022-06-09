import App from "App";
import { Routes, Route } from "react-router-dom";

const Routing = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
    </Routes>
  );
};

export default Routing;
