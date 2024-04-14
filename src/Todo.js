import { ListItem, ListItemText, InputBase, Checkbox } from "@mui/material";
import React, { useState } from "react";

const Todo = (props) => {
    // item 상태 변수
    const [item, setItem] = useState(props.item);

    return (
        <ListItem>
            {/* 체크박스 */}
            <Checkbox checked={item.done} />
            {/* 텍스트 입력 */}
            <ListItemText>
                <InputBase
                    inputProps={{ "aria-label": "naked" }}
                    type="text"
                    id={item.id}
                    name={item.id}
                    value={item.title}
                    multiline={true}
                    fullWidth={true}
                />
            </ListItemText>
        </ListItem>
    );
};

export default Todo;
