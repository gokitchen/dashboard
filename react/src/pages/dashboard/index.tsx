import { Paper, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import TodoCard from "components/TodoCard";

type Item = {
  title: string;
  text: string;
};

const fabStyle = {
  position: "absolute",
  bottom: 16,
  right: 16,
};

const DashBoard = (): JSX.Element => {
  const [todos, setTodos] = useState<Item[]>([]);

  /**
   * todoを追加する
   */
  const handleAddTodo = (): void => {
    setTodos([...todos, { title: "", text: "" }]);
  };

  return (
    <>
      <Paper>
        {todos.map((value, index) => {
          return <TodoCard key={index} {...value}></TodoCard>;
        })}
      </Paper>
      <Fab
        color="primary"
        aria-label="add"
        sx={fabStyle}
        onClick={(): void => handleAddTodo()}
      >
        <AddIcon />
      </Fab>
    </>
  );
};

export default DashBoard;
