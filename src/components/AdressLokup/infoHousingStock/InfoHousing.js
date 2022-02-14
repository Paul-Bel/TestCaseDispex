import React from "react";
import s from './infoHousing.module.css'
import {Tenants} from "./Tenants";

const InfoHousing = (props) => {

    let infoMessage = <span className={s.timeInfo}>чтобы получить список жильцов, выберите адрес или введите номер телефона</span>
    let errorMessage = <span className={s.timeErrorInfo}>сервер не доступен, попробуйте позже</span>
    let tenantsInfo = props.users.map((us, i) => {
        return <Tenants key={us+i+us} users={us} deleteUserOfFlatTC={props.deleteUserOfFlatTC}/>
    })
    return (
        <div className={s.housingBlock}>
            {(props.users.length >= 1) && tenantsInfo}
            {(!props.users.length >= 1) && (!props.error ? infoMessage : errorMessage)}
        </div>
    )
}

export default InfoHousing
