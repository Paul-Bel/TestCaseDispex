import React, {useEffect, useState} from "react";
import s from './adress.module.css'
import {setState} from "../../redux/streetReducer";
import {connect} from "react-redux";
import {getHouse} from "../../redux/houseReducer";
import {setFlat} from "../../redux/flatReducer";
import AddTenant from "./AddTenant/AddTenant";
import InfoHousing from "./infoHousingStock/InfoHousing";
import {createNewTenants, deleteUserOfFlat, findUserFromPhone, getUserOfFlat} from "../../redux/usersReducer";
import {FindTetant} from "./findTenant/FindTetant";
import {SearchBox} from "./searchBox/SearchBox";


const CuntainerComponent = (props) => {
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [flat, setFlat] = useState('')
    const [flatId, setFlatId] = useState('')
    const [findPhone, setFindPhone] = useState('')

    useEffect(() => {
        props.setState()
    }, [])
    useEffect(() => {
        let stritID = filterForInput.find((st) => {
            return st.name === street ? st.id : undefined
        })
        if (stritID !== undefined) {
            props.getHouse(stritID.id)
            //setIdStreet(stritID.id) //визуализация идентификации (id)
        }
    }, [street])
    useEffect(() => {
        let houseID = filterForHouse.find((st) => {
            return st.name === house ? st.id : undefined
        })
        if (houseID !== undefined) {
            props.setFlat(houseID.id)
            //setIdHouse(houseID.id) //визуализация идентификации (id)
        }
    }, [house])
    useEffect(() => {
        let floatID = filterForFlat.find((fl) => {
            return fl.name === flat ? fl.id : undefined
        })
        if (floatID !== undefined) {
            setFlatId(floatID.id)
            props.getUserOfFlat(floatID.id)
        }
    }, [flat])

    let filterForInput = props.streetState
    let filterForHouse = props.houseState
    let filterForFlat = props.flatState

    let showStreet = filterForInput.map((st) => {
        return st.name
    })
    let showHouse = filterForHouse.map((st) => {
        return st.name
    })
    let showFlat = filterForFlat.map((st) => {
        return st.flat
    })
    const setFindPhoneHandler = (e) => {
        if (isFinite(e.currentTarget.value)) {
            setFindPhone(e.currentTarget.value)
        }
        if (findPhone.length === 12) {
            setFindPhone(findPhone.substring(1))
        }
    }
    return (
            <div className={s.lookupBlock}>
                <SearchBox street={street} showStreet={showStreet} setStreet={setStreet}
                           showHouse={showHouse} house={house} showFlat={showFlat} flat={flat}
                           setHouse={setHouse} setFlat={setFlat}
                />
                <AddTenant
                    store={props.store}
                    createNewTenants={props.createNewTenants}
                    flatId={flatId}/>
                <InfoHousing flat={flat} users={props.userState} deleteUserOfFlat={props.deleteUserOfFlat}/>
                <FindTetant findPhone={findPhone}
                            setFindPhoneHandler={setFindPhoneHandler}
                            placeholder={"введите номер тел:"}
                            findUserFromPhone={props.findUserFromPhone}/>
            </div>
    )
}
const mapStateToProps = store => store
export default connect(mapStateToProps, {
    setState, getHouse, setFlat, getUserOfFlat,
    createNewTenants, findUserFromPhone, deleteUserOfFlat
})(CuntainerComponent)

{/*/!*<div>УЛИЦА: {idstreet} </div>*!/  визуализация идентификации*/}
{/*<div>Дом: {idhouse} </div>*/}
{/*<div>Квартира: {flatId} </div>*/}
//const [idstreet, setIdStreet] = useState('') //визуализация идентификации (id)
//const [idhouse, setIdHouse] = useState('') //визуализация идентификации (id)