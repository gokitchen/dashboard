import Button from "@mui/material/Button";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: ReactNode;
  link: string;
};

const TestButton = ({ children, link }: Props): JSX.Element => {
  return (
    <Link to={link}>
      <Button variant="outlined" size="small">
        {children}
      </Button>
    </Link>
  );
};

export default TestButton;
