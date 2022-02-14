import React from "react";
import s from "./SearchBox.module.css";
import {InputSelect} from "../inputSrlrct/InputSelect";


export const SearchBox = props => {

const {street, showStreet, setStreet, showHouse,
    house, showFlat, flat, setHouse, setFlat} = props
    return (
        <div className={s.inputGroop}>
            {!street && <div className={s.infoMessage}>Выберите адрес</div>}
            <div className={s.inputs}>
                <InputSelect placeholder={"*улица"} showStreet={showStreet} value={street} onChange={setStreet}/>
                <InputSelect placeholder={"дом"} showStreet={showHouse} value={house} onChange={setHouse}/>
                <InputSelect placeholder={"дом/офис"} showStreet={showFlat} value={flat} onChange={setFlat}/>
            </div>
        </div>
    )
}