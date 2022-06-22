import { Link, SxProps, Typography } from "@mui/material";

type Props = {
  sx?: SxProps;
};

const Copyright = (props: Props): JSX.Element => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
