import {
  ButtonGroup,
  Card,
  CardContent,
  IconButton,
  SxProps,
} from "@mui/material";
import { TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  title: string;
  text: string;
  sx: SxProps;
};
const TodoCard = ({ title, text, sx }: Props): JSX.Element => {
  return (
    <Card component="li" variant="outlined" sx={sx}>
      <CardContent>
        <TextField
          variant="outlined"
          label="Title"
          id="standard"
          margin="dense"
          fullWidth
          defaultValue={title}
        />
        <TextField
          id="outlined-textarea-static"
          label="contents"
          placeholder="Placeholder"
          maxRows={4}
          multiline
          variant="outlined"
          margin="dense"
          fullWidth
          defaultValue={text}
        />
      </CardContent>
      <ButtonGroup>
        <IconButton color="primary" aria-label="save edited">
          <SaveIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="delete item">
          <DeleteIcon />
        </IconButton>
      </ButtonGroup>
    </Card>
  );
};

export default TodoCard;
