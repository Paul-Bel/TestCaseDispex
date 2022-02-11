import React, {useEffect, useState} from "react";
import s from './adress.module.css'
import {setState} from "../../redux/streetReducer";
import {connect} from "react-redux";
import {getHouse} from "../../redux/houseReducer";
import {setFlat} from "../../redux/flatReducer";
import AddTenant from "../AddTenant/AddTenant";
import InfoHousing from "../infoHousingStock/InfoHousing";
import {createNewTenants, getUserOfFlat} from "../../redux/usersReducer";
import {InputSelect} from "../inputSrlrct/InputSelect";
import {UnickInput} from "../findTenant/UnickInput";

//{id: 37, prefix: {id: 2, name: 'ул', shortName: 'ул'}, name: 'Горького', cityId: 1, city: 'Тюмень'}
const AddressLookup = (props) => {

    const [street, setStreet] = useState('')
    const [idstreet, setIdStreet] = useState('')
    const [house, setHouse] = useState('')
    const [idhouse, setIdHouse] = useState('')
    const [flat, setFlat] = useState('')
    const [flatId, setFlatId] = useState('')

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

        let showStreet = filterForInput.map((st, i) => {
        return st.name
    })
        let showHouse = filterForHouse.map((st, i) => {
        return st.name
    })

    let showFlat = filterForFlat.map((st, i) => {
        return st.flat
    })

    return (
        <>
            <div className={s.lukupBlock}>
                <div>УЛИЦА: {idstreet} </div>
                <div>Дом: {idhouse} </div>
                <div>Квартира: {flatId} </div>

                {/*<span><span style={{color: 'red'}}>*</span> Адрес</span>*/}
                <div className={s.inputGroop}>
                    {!street && <div className={s.infoMessage}>выберите адрес</div>}
                    <div className={s.inputs}>
                    <InputSelect placeholder={"улица"} showStreet={showStreet} street={street} setStreet={setStreet}/>
                    <InputSelect placeholder={"дом"} showStreet={showHouse} street={house} setStreet={setHouse}/>
                    <InputSelect placeholder={"дом/офис"} showStreet={showFlat} street={flat} setStreet={setFlat}/>
                    </div>
                </div>

            <InfoHousing/>
            <AddTenant
                store={props.store}
                createNewTenants={props.createNewTenants}
                flatId={flatId}/>
                <div>
                    <div>Найти жильца</div>
            <UnickInput />
                </div>
            </div>
        </>
    )
}
const mapStateToProps = store => store
export default connect(mapStateToProps, {setState, getHouse, setFlat, getUserOfFlat, createNewTenants})(AddressLookup)



{/*<Autocomplete*/}
{/*    className={s.input}*/}
{/*    inputValue={street}*/}
{/*    onInputChange={(event, newInputValue) => {*/}
{/*        setStreet(newInputValue);*/}
{/*    }}*/}
{/*    disablePortal*/}
{/*    id="combo-box-demo"*/}
{/*    options={showStreet}*/}
{/*    size={"small"}*/}
{/*    sx={{ width: 200, margin: 2 }}*/}
{/*    renderInput={(params) => <TextField {...params}*/}

{/*                                        label="улица" />}*/}
{/*/>*/}

{/*<Autocomplete*/}
{/*    className={s.input}*/}
{/*    inputValue={house}*/}
{/*    onInputChange={(event, newInputValue) => {*/}
{/*        setHouse(newInputValue);*/}
{/*    }}*/}
{/*    disablePortal*/}
{/*    id="combo-box-demo"*/}
{/*    options={showHouse}*/}
{/*    size={"small"}*/}
{/*    sx={{ width: 200, margin: 2 }}*/}
{/*    renderInput={(params) => <TextField {...params} label="дом"/>}*/}
{/*/>*/}
{/*<Autocomplete*/}
{/*    className={s.input}*/}
{/*    inputValue={flat}*/}
{/*    onInputChange={(event, newInputValue) => {*/}
{/*        setFlat(newInputValue);*/}
{/*    }}*/}
{/*    disablePortal*/}
{/*    id="combo-box-demo"*/}
{/*    options={showFlat}*/}
{/*    size={"small"}*/}
{/*    sx={{ width: 200, margin: 2 }}*/}
{/*    renderInput={(params) => <TextField {...params} label="квартира/офис"/>}*/}
{/*/>*/}
{/*<input value={street} onChange={streetValue} onDoubleClick={clickStreetHandler} name={"street"}*/}
{/*       list={"cities"} placeholder={"Улица"}/>*/}
{/*<datalist id={"cities"}>*/}
{/*    {showStreet}*/}
{/*</datalist>*/}
{/*<input*/}
{/*    value={house} onChange={houseValue}  onDoubleClick={clickStreetHandler}*/}
{/*    name={"house"}*/}
{/*    list={"houseNamber"}*/}
{/*    placeholder={"Дом"}/>*/}
{/*<datalist id={"houseNamber"}>*/}
{/*    {showHouse}*/}
{/*</datalist>*/}
{/*<input value={flat} onChange={flatValue} name={"flatOffice"} list={"flatNamber"}*/}
{/*       placeholder={"Кв./офис"}/>*/}
{/*<datalist id={"flatNamber"}>*/}
{/*    {showFlat}*/}
{/*</datalist>*/}
