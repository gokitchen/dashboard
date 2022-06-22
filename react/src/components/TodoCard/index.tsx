import { ButtonGroup, Card, CardContent, IconButton } from "@mui/material";
import { TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  title: string;
  text: string;
  divide?: number;
  marginLeft: string;
};
const TodoCard = ({
  title,
  text,
  divide = 1,
  marginLeft,
}: Props): JSX.Element => {
  return (
    <Card
      component="li"
      variant="outlined"
      sx={{
        width: `calc(100%/ ${divide})`,
        marginLeft,
        ":first-of-type": {
          marginLeft: 0,
        },
        ":nth-of-type(${divide}n)": {
          marginLeft: 0,
        },
      }}
    >
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
