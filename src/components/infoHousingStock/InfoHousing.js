import React from "react";
import s from './infoHousing.module.css'
import {Tenants} from "./Tenants";

export const InfoHousing = () => {

    return (
        <div className={s.housingBlock}>

            <Tenants/>
        </div>
    )
}