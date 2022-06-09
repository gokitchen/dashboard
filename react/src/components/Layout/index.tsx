import { Box } from "@mui/material";
import Footer from "components/Footer";
import Header from "components/Header";
import { Outlet } from "react-router-dom";

const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Box p={2}>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
