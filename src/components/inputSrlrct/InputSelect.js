import React from "react";
import {Autocomplete, TextField} from "@mui/material";
import s from "./InputSelect.module.css";


export const InputSelect = (props) => {
    return (
        <Autocomplete
            className={s.input}
            inputValue={props.street}
            onInputChange={(event, newInputValue) => {
                props.setStreet(newInputValue);
            }}
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