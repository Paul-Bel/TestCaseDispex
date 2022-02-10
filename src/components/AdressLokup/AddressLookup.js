import React, {useEffect, useState} from "react";
import s from './adress.module.css'
import {setState} from "../../redux/streetReducer";
import {connect} from "react-redux";

//{id: 37, prefix: {id: 2, name: 'ул', shortName: 'ул'}, name: 'Горького', cityId: 1, city: 'Тюмень'}
const AddressLookup = (props) => {
    useEffect(() => {
        setState()
    }, [])

    const [street, setStreet] = useState('')

    let filterForInput = props.rootState
    console.log('id - street',props.rootState.filter(m => m.name === 'Горького'))
    // .filter(f => f.name)
    // console.log("фильтр", filterStreet)
    let showStreet = filterForInput.map((st, i) => {
        return <option id={st + i + st.id} value={st.name}/>
    })
    let showHouse = filterForInput.map((house, i) => {
        return house.name === street ? <option id={house + i + house.id} value={house.id}/> : undefined
    })

    let idNum = filterForInput.map(m => {
        return <option value={m.id}/>
    })
    const streetValue = (e) => {
        setStreet(e.currentTarget.value)
        console.log('id - street',filterForInput.filter(m => m.name === 'Горького'))
        // e.currentTarget.value ===
    }

    console.log(filterForInput)
    return (
        <div className={s.lukupBlock}>
            <span><span style={{color: 'red'}}>*</span> Адрес</span>
            <div>
                <input onChange={streetValue} name={"street"} list={"cities"} placeholder={"Улица"}/>
                <datalist id={"cities"}>
                    {showStreet}
                </datalist>
                <input name={"house"} list={"houseNamber"} placeholder={"Дом"}/>
                <datalist id={"houseNamber"}>
                    {showHouse}


                    {/*<option value={1}/>*/}
                    {/*<option value={3}/>*/}
                    {/*<option value={5}/>*/}
                    {/*<option value={7}/>*/}
                    {/*<option value={9}/>*/}
                </datalist>
                <input name={"flatOffice"} list={"houseNamber"} placeholder={"Кв./офис"}/>
                <datalist id={"houseNamber"}>
                    <option value={1}/>
                    <option value={3}/>
                    <option value={5}/>
                    <option value={7}/>
                    <option value={9}/>
                </datalist>


            </div>


        </div>
    )
}
const mapStateToProps = (store) => {
    return store
}
export default connect(mapStateToProps, setState)(AddressLookup)