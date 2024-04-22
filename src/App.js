import "./App.css";
import Todo from "./Todo";
import React, { useState, useEffect } from "react";
import { Container, List, Paper } from "@mui/material";
import AddTodo from "./AddTodo";
import { call } from "./ApiService"; 

function App() {
  // item 상태 변수
  const [items, setItems] = useState([]);

  // 로딩할 때 한번만 실행 (두번째 인수의 배열에 변화가 올 때마다 재실행)
  useEffect(() => {
    call("/todo", "GET", null)
    .then( (response) => setItems(response.data)); 
  }, []);

  const addItem = (item) => {
    call("/todo", "POST", item)
    .then((response) => setItems(response.data)); 
  };

  const deleteItem = (item) => {
    call("/todo", "DELETE", item)
    .then((response) => setItems(response.data)); 
  };

  const editItem = (item) => {
    call("/todo", "PUT", item)
    .then((response) => setItems(response.data)); 
  };

  let todoItems = items.length > 0 && (
    <Paper style={{ margin: 16 }}>
      <List>
        {items.map((item) => (
          <Todo
            item={item}
            editItem={editItem}
            deleteItem={deleteItem}
            key={item.id}
          />
        ))}
        ;
      </List>
    </Paper>
  );

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem} />
        <div className="TodoList">{todoItems}</div>
      </Container>
    </div>
  );
}

export default App;
