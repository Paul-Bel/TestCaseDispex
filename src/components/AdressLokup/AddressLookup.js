import React, {useEffect, useState} from "react";
import s from './adress.module.css'
import {setState} from "../../redux/streetReducer";
import {connect} from "react-redux";
import {getHouse} from "../../redux/houseReducer";
import {setFlat} from "../../redux/flatReducer";

//{id: 37, prefix: {id: 2, name: 'ул', shortName: 'ул'}, name: 'Горького', cityId: 1, city: 'Тюмень'}
const AddressLookup = (props) => {

    const [street, setStreet] = useState('')
    const [house, setHouse] = useState([])
    const [flat, setFlat] = useState([])

    useEffect(() => {
        props.setState()
    }, [])
    useEffect(() => {
        let y = filterForInput.find((st) => {
            return st.name === street ? st.id : undefined
        })
        if (y !== undefined) {
            // debugger
            props.getHouse(y.id)
        }
    }, [street])
    useEffect(() => {
        let y = filterForHouse.find((st) => {
            return st.name === house ? st.id : undefined
        })
        if (y !== undefined) {
            props.setFlat(y.id)
        }
    }, [house])


    let filterForInput = props.streetState
    let filterForHouse = props.houseState
    let filterForFlat = props.flatState

    let showStreet = filterForInput.map((st, i) => {
        return <option id={st + i + st.id} value={st.name}/>
    })
    let showHouse = filterForHouse.map((st, i) => {
        return <option id={st + i + st.id} value={st.name}/>
    })
    let showFlat = filterForFlat.map((st, i) => {
        return st.flat.length < 4 ? <option id={st + i + st.id} value={st.flat}/> : ''
    })

    const streetValue = (e) => {
        setStreet(e.currentTarget.value)
        setHouse('')
        setFlat('')
    }
    const houseValue = (e) => {
        console.log('house',e)
        setHouse(e.currentTarget.value)
        setFlat('')
        props.setFlat()
    }
    const flatValue = (e) => setFlat(e.currentTarget.value)
    const clickStreetHandler = () => {
        // e.currentTarget.dataset.currency === 'street'
        // ?
        setStreet('')
        // : e.currentTarget.dataset.currency === 'house'
        // ?
        // setHouse('')
        // // : undefined
    }

    console.log(filterForInput)
    return (
        <div className={s.lukupBlock}>
            <span><span style={{color: 'red'}}>*</span> Адрес</span>
            <div>
                <input value={street} onChange={streetValue} onDoubleClick={clickStreetHandler} name={"street"}
                       list={"cities"} placeholder={"Улица"}/>
                <datalist id={"cities"}>
                    {showStreet}
                </datalist>
                <input value={house} onChange={houseValue} onDoubleClick={clickStreetHandler} name={"house"}
                       list={"houseNamber"} placeholder={"Дом"}/>
                <datalist id={"houseNamber"}>
                    {showHouse}
                </datalist>
                <input value={flat} onChange={flatValue} name={"flatOffice"} list={"flatNamber"}
                       placeholder={"Кв./офис"}/>
                <datalist id={"flatNamber"}>
                    {showFlat}
                </datalist>


            </div>


        </div>
    )
}
const mapStateToProps = (store) => {
    return store
}
export default connect(mapStateToProps, {setState, getHouse, setFlat})(AddressLookup)