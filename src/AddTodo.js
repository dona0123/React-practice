import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";

const AddTodo = (props) => {
  // 사용자의 입력을 저장할 오브젝트
  const [item, setItem] = useState({ title: "" });
  const addItem = props.addItem; // 부모가 전달해준 함수

  // 입력 값이 변경될 때 호출되는 함수
  const onInputChange = (e) => {
    setItem({ title: e.target.value });
    console.log(item);
  };

  // 추가 버튼 클릭 시 호출되는 함수
  const onButtonClick = (e) => {
    addItem(item);
    setItem({ title: "" }); // 입력 값 초기화하여 리렌더링 발생
  };

  const enterEventHandler = (e) => {
    if (e.key === 'Enter') {
      onButtonClick(); 
    }
  }

  return (
    <Grid container style={{ marginTop: 20 }}>
      {/* 입력 필드 */}
      <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
        <TextField
          placeholder="Add Todo here"
          fullWidth
          onChange={onInputChange}
          onKeyPress={enterEventHandler}
          value={item.title}
        />
      </Grid>
      {/* 추가 버튼 */}
      <Grid xs={1} md={1} item>
        <Button
          fullWidth
          style={{ height: "100%" }}
          color="secondary"
          variant="outlined"
          onClick={onButtonClick}
        >
          +
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTodo;
