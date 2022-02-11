import React from "react";
import {TextField} from "@mui/material";
import s from './FindTenant.module.css'

export const UnickInput = (props) => {
    return (
    <TextField
        size={'small'}
        className={s.UnickInput}
        onChange={props.onChange}
        value={props.value}
        error={props.error}
        id="filled-search"
        label={props.placeholder}
        placeholder={props.placeholder}
        // label={props.error && "Error!!!"}
        type={"search"}
        variant="standard"
    />
    )
}