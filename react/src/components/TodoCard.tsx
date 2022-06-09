import { Card, CardContent, IconButton } from "@mui/material";
import { Box } from "@mui/material";
import { TextField } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoCard = (): JSX.Element => {
  return (
    <Box sx={{ borderRadius: 2, maxWidth: 250, maxHeight: 250 }}>
      <Card variant="outlined">
        <CardContent>
          <TextField fullWidth label="Title" id="fullWidth" />
          <TextField
            id="filled-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="filled"
          />
          <IconButton color="primary" aria-label="save edited">
            <SaveIcon />
          </IconButton>
          <IconButton color="secondary" aria-label="delete item">
            <DeleteIcon />
          </IconButton>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TodoCard;
