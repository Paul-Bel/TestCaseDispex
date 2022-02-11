import React from "react";
import s from "../adress.module.css";
import {UnickInput} from "./UnickInput";
import {Button} from "@mui/material";

export const FindTetant = (props) => {

    return(
        <div className={s.find}>
            <div className={s.info}>Найти жильца</div>
            <UnickInput value={props.findPhone} onChange={props.setFindPhoneHandler} erroe={''}
                        placeholder={"введите номер тел:"}/>
            <Button color={"primary"} variant="outlined" onClick={() => props.findUserFromPhone(props.findPhone)}>Искать</Button>
        </div>
    )
}