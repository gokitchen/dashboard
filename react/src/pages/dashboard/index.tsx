import { useState } from "react";
import { Paper, Fab, List } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TodoCard from "components/TodoCard";

type Item = {
  title: string;
  text: string;
};

const fabStyle = {
  position: "fixed",
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
      {todos.length ? (
        <Paper sx={{ padding: "10px 20px" }}>
          <List
            sx={{
              display: "flex",
              alignItems: "top",
              flexWrap: "wrap",
              justifyContent: "flex-start",
            }}
          >
            {todos.map((value, index) => {
              return (
                <TodoCard
                  key={index}
                  {...value}
                  sx={{ width: "calc(100% / 3 - 20px)", margin: "20px 10px" }}
                ></TodoCard>
              );
            })}
          </List>
        </Paper>
      ) : (
        ""
      )}
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
