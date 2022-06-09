import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IconButton } from "@mui/material";
import { Container } from "@mui/material";

const Home = (): JSX.Element => {
  return (
    <div>
      Welcome this is home page XD
      <Container maxWidth="sm">hello</Container>
      <IconButton aria-label="add" size="large">
        <AddCircleOutlineIcon />
      </IconButton>
    </div>
  );
};

export default Home;
