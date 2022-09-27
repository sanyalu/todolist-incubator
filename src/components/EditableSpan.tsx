import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@material-ui/core";

type EditableSpanType = {
    title: string
    callBack: (currentTitle: string) => void
}

export const EditableSpan = (props: EditableSpanType) => {
    const [edit, setEdit] = useState(false)
    let [currentTitle, setCurrentTitle] = useState(props.title)

    const changeEdit = () => {
        setEdit(!edit)
        changeTask()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCurrentTitle(e.currentTarget.value)
    }


    const changeTask = () => {
        let newTitle = currentTitle.trim();
        props.callBack(newTitle);
    }

    return (
        edit
            ? <TextField value={currentTitle} onBlur={changeEdit} onChange={onChangeHandler} autoFocus/>
            : <span onDoubleClick={changeEdit}>{props.title}</span>

    );
};

