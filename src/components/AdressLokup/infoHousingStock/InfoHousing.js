import React from "react";
import s from './infoHousing.module.css'
import {Tenants} from "./Tenants";

const InfoHousing = (props) => {
    let infoMessage = <span className={s.timeInfo}>чтобы получить список жильцов, выберите адрес или введите номер телефона</span>
    let tenantsInfo = props.users.map((us, i) => {
        return <Tenants key={us+i+us} users={us} deleteUserOfFlat={props.deleteUserOfFlat}/>
    })
    return (
        <div className={s.housingBlock}>
            {(props.users.length >= 1) | (props.flat !== '') && tenantsInfo}
            {(!props.users.length >= 1) && infoMessage}
        </div>
    )
}

export default InfoHousing
