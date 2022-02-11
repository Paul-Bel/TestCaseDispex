import React from "react";
import s from './infoHousing.module.css'
import {Tenants} from "./Tenants";
import {connect} from "react-redux";
import {deleteUserOfFlat} from "../../redux/usersReducer";

const InfoHousing = (props) => {
    let tenantsInfo = props.users.map(us => {
        return <Tenants users={us} deleteUserOfFlat={props.deleteUserOfFlat}/>
    })
    return (
        <div className={s.housingBlock}>

            {(props.users.length >= 1) && tenantsInfo}
        </div>
    )
}
const MapStatToProps = (store) => {
    return ({users: store.userState})}
export default connect(MapStatToProps, {deleteUserOfFlat})(InfoHousing)