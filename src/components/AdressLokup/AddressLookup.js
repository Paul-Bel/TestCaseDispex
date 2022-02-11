import React, {useEffect, useState} from "react";
import s from './adress.module.css'
import {setState} from "../../redux/streetReducer";
import {connect} from "react-redux";
import {getHouse} from "../../redux/houseReducer";
import {setFlat} from "../../redux/flatReducer";
import AddTenant from "../AddTenant/AddTenant";
import InfoHousing from "../infoHousingStock/InfoHousing";
import {createNewTenants, findUserFromPhone, getUserOfFlat} from "../../redux/usersReducer";
import {InputSelect} from "../inputSrlrct/InputSelect";
import {UnickInput} from "../findTenant/UnickInput";
import {Button} from "@mui/material";


const AddressLookup = (props) => {
    const [street, setStreet] = useState('')
    const [idstreet, setIdStreet] = useState('') //визуализация идентификации
    const [house, setHouse] = useState('')
    const [idhouse, setIdHouse] = useState('') //визуализация идентификации
    const [flat, setFlat] = useState('')
    const [flatId, setFlatId] = useState('')
    const [findPhone, setFindPhone] = useState('')

    useEffect(() => {
        props.setState()
    }, [])
    useEffect(() => {
        let y = filterForInput.find((st) => {
            return st.name === street ? st.id : undefined
        })
        if (y !== undefined) {
            props.getHouse(y.id)
            setIdStreet(y.id)
        }
    }, [street])
    useEffect(() => {
        let y = filterForHouse.find((st) => {
            return st.name === house ? st.id : undefined
        })
        if (y !== undefined) {
            props.setFlat(y.id)
            setIdHouse(y.id)
        }
    }, [house])
    useEffect(() => {
        let y = filterForFlat.find((fl) => {
            return fl.name === flat ? fl.id : undefined
        })
        if (y !== undefined) {
            setFlatId(y.id)
            props.getUserOfFlat(y.id)
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
        <>
            <div className={s.lukupBlock}>
                {/*/!*<div>УЛИЦА: {idstreet} </div>*!/  визуализация идентификации*/}
                {/*<div>Дом: {idhouse} </div>*/}
                {/*<div>Квартира: {flatId} </div>*/}
                <div className={s.inputGroop}>
                    {!street && <div className={s.infoMessage}>выберите адрес</div>}
                    <div className={s.inputs}>
                        <InputSelect placeholder={"*улица"} showStreet={showStreet} street={street}
                                     setStreet={setStreet}/>
                        <InputSelect placeholder={"дом"} showStreet={showHouse} street={house} setStreet={setHouse}/>
                        <InputSelect placeholder={"дом/офис"} showStreet={showFlat} street={flat} setStreet={setFlat}/>
                    </div>
                </div>
                <AddTenant
                    store={props.store}
                    createNewTenants={props.createNewTenants}
                    flatId={flatId}/>
                <InfoHousing/>
                <div className={s.find}>
                    <div>Найти жильца</div>
                    <UnickInput value={findPhone} onChange={setFindPhoneHandler} erroe={''}
                                placeholder={"введите номер тел:"}/>
                    <Button color={"primary"} variant="outlined" onClick={() => props.findUserFromPhone(findPhone)}>Искать</Button>
                </div>
            </div>
        </>
    )
}
const mapStateToProps = store => store
export default connect(mapStateToProps, {
    setState, getHouse, setFlat, getUserOfFlat, createNewTenants, findUserFromPhone
})(AddressLookup)