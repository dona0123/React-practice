import { useState } from "react";
import "./App.css";
import Todo from "./Todo";
import { Container, Paper, List } from "@mui/material";
import AddTodo from "./AddTodo";

function App() {
  // 아이템 상태 변수
  const [items, setItems] = useState([]);

  // 아이템 추가 함수
  const addItem = (item) => {
    // 아이템에 ID와 done 속성 추가
    item.id = "ID-" + item.id;
    item.done = false;
    // 아이템 배열 업데이트
    setItems([...items, item]); // 자동으로 리렌더링이 일어남
    console.log("items: ", items);
  }

  const deleteItem = (item) => {
    const newItems = items.filter( e => e.id !== item.id);
    setItems([...newItems]);
  }

  const editItem = () => {
    setItems([...items]); 
}


  // 할일 목록
  let todoItems = items.length > 0 && 
    <Paper style={{ margin:16 }}>
      <List>
        {items.map((item) => <Todo item={item} editItem={editItem} deleteItem={deleteItem} key={item.id}/> )};
        
      </List>
    </Paper>
  


  return (
    <div className="App">
      <Container maxWidth="md">
        <AddTodo addItem={addItem} /> {/* 할일 추가 컴포넌트 */}
        <div className="TodoList">{todoItems}</div> {/* 할일 목록 */}
      </Container>
    </div>
  );
}

export default App;
