import Button from "@mui/material/Button";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const TestButton = ({ children }: Props): JSX.Element => {
  return (
    <Button variant="outlined" size="small">
      {children}
    </Button>
  );
};

export default TestButton;
