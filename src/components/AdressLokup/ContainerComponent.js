import React, {useEffect, useState} from "react";
import s from './adress.module.css'
import {setStreetStateTC} from "../../redux/streetReducer";
import {connect} from "react-redux";
import {getHouse} from "../../redux/houseReducer";
import {setFlatTC} from "../../redux/flatReducer";
import AddTenant from "./AddTenant/AddTenant";
import InfoHousing from "./infoHousingStock/InfoHousing";
import {createNewTenants, deleteUserOfFlatTC, findUserFromPhoneTC, getUserOfFlatTC} from "../../redux/usersReducer";
import {FindTetant} from "./findTenant/FindTetant";
import {SearchBox} from "./searchBox/SearchBox";


const ContainerComponent = (props) => {
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [flat, setFlat] = useState('')
    const [flatId, setFlatId] = useState('')
    const [findPhone, setFindPhone] = useState('')

    useEffect(() => {
        props.setStreetStateTC()
    }, [])
    useEffect(() => {
        let streetID = filterForStreet.find((st) => {
            return st.name === street ? st.id : undefined
        })
        if (streetID !== undefined) {
            props.getHouse(streetID.id)
            //setIdStreet(stritID.id) //визуализация идентификации (id)
        }
    }, [street])
    useEffect(() => {
        let houseID = filterForHouse.find((st) => {
            return st.name === house ? st.id : undefined
        })
        if (houseID !== undefined) {
            props.setFlatTC(houseID.id)
            //setIdHouse(houseID.id) //визуализация идентификации (id)
        }
    }, [house])
    useEffect(() => {
        let floatID = filterForFlat.find((fl) => {
            return fl.name === flat ? fl.id : undefined
        })
        if (floatID !== undefined) {
            setFlatId(floatID.id)
            props.getUserOfFlatTC(floatID.id)
        }
    }, [flat])

    let filterForStreet = props.streetState
    let filterForHouse = props.houseState
    let filterForFlat = props.flatState
    console.log(filterForStreet)
    let showStreet = filterForStreet.map((st) => {
        return st.name ? st.name : ''
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
                <InfoHousing flat={flat} users={props.userState}
                             deleteUserOfFlatTC={props.deleteUserOfFlatTC} error={props.streetState[0].error}/>
                <FindTetant findPhone={findPhone}
                            setFindPhoneHandler={setFindPhoneHandler}
                            placeholder={"введите номер тел:"}
                            findUserFromPhoneTC={props.findUserFromPhoneTC}/>
            </div>
    )
}
const mapStateToProps = store => store
export default connect(mapStateToProps, {
    setStreetStateTC, getHouse, setFlatTC, getUserOfFlatTC,
    createNewTenants, findUserFromPhoneTC, deleteUserOfFlatTC
})(ContainerComponent)

{/*/!*<div>УЛИЦА: {idstreet} </div>*!/  визуализация идентификации*/}
{/*<div>Дом: {idhouse} </div>*/}
{/*<div>Квартира: {flatId} </div>*/}
//const [idstreet, setIdStreet] = useState('') //визуализация идентификации (id)
//const [idhouse, setIdHouse] = useState('') //визуализация идентификации (id)