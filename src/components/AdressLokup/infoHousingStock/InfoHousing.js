import React from "react";
import s from './infoHousing.module.css'
import {Tenants} from "./Tenants";
import {connect} from "react-redux";
import {deleteUserOfFlat} from "../../../redux/usersReducer";

const InfoHousing = (props) => {
    let infoMessage = <span className={s.timeInfo}>Выберите адрес, чтобы получить список жильцов или введите номер телефона</span>
    let tenantsInfo = props.users.map((us, i) => {
        return <Tenants key={us+i+us} users={us} deleteUserOfFlat={props.deleteUserOfFlat}/>
    })
    return (
        <div className={s.housingBlock}>
            {(props.users.length >= 1) && tenantsInfo}
            {(!props.users.length >= 1) && infoMessage}
        </div>
    )
}
const MapStatToProps = (store) => {
    return ({users: store.userState})}
export default connect(MapStatToProps, {deleteUserOfFlat})(InfoHousing)