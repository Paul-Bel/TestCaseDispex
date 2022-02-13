import React from "react";
import {Autocomplete, TextField} from "@mui/material";
import s from "./InputSelect.module.css";


export const InputSelect = (props) => {

    const onChangeHandler = (event, newInputValue) => {
        props.onChange(newInputValue)
        props.onChangeFlat && props.onChangeFlat() && alert("квартира сброшена")

    }
    const onClickHandler = () => {
        alert('dfdf')
        props.onChangeFlat && props.onChangeFlat('')}
    return (
        <Autocomplete
            className={s.input}
            autoFocus={true}
            inputValue={props.value}
            value={props.value}
            onInputClick={onClickHandler}
            onClick={onClickHandler}
            onInputChange={onChangeHandler}
            disablePortal
            id="combo-box-demo"
            options={props.showStreet}
            size={"small"}
            sx={{ width: 200, margin: 2 }}
            renderInput={(params) => <TextField {...params}

                                                label={props.placeholder} />}
        />
    )
}