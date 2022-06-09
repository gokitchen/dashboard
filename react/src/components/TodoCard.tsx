import { Card, CardContent, IconButton } from "@mui/material";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

type Props = {
  title: string;
  text: string;
};
const TodoCard = ({ title, text }: Props): JSX.Element => {
  return (
    <Box sx={{ width: 400, height: 600, margin: 2 }}>
      <Card variant="outlined">
        <CardContent>
          <TextField
            variant="outlined"
            label="Title"
            id="standard"
            sx={{ margin: 2 }}
            value={title}
          />
          <TextField
            id="outlined-textarea-static"
            label="contents"
            placeholder="Placeholder"
            maxRows={4}
            multiline
            variant="outlined"
            sx={{ margin: 2 }}
            value={text}
          />
        </CardContent>
        <IconButton color="primary" aria-label="save edited">
          <SaveIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="delete item">
          <DeleteIcon />
        </IconButton>
      </Card>
    </Box>
  );
};

export default TodoCard;
