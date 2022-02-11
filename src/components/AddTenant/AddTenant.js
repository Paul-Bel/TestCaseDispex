import React, {useState} from "react";
import s from './addTenant.module.css'
import {UnickInput} from "../findTenant/UnickInput";
import {Button} from "@mui/material";

const AddTenant = (props) => {
    const [name, setName] = useState('')
    const [eMail, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [error, setError] = useState()
    const cancellationHandler = () => {
        setName('')
        setEmail('')
        setPhone('+7')
    }
    const addUser = () => {
        let num = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
        if(!num.test(phone)){return setPhone('номер не верный')}
        // let validate = /^\w+@\w+\.\w{2,4}$/i
        // if(!validate.test(eMail)) return setEmail('емаил не верный')
        let _phone = phone
        let _eMail = eMail
        let _name = name
        if (_phone.length < 9) return
        props.createNewTenants(props.flatId, _phone, _name, _eMail)
        setName('')
        setEmail('')
        setPhone('+7')
    }
    const changeName = (e) => {
        setName(e.currentTarget.value)
    }
    const changeEmail = (e) => {
        setError('')
        setEmail(e.currentTarget.value)
    }
    const changePhone = (e) => {
        if (isFinite(e.currentTarget.value)) {
            setPhone(e.currentTarget.value)
        }
        if (phone.length === 10) {
            setPhone(phone.substring(1))
        }
    }
    return (
        <div className={s.blockAddTenant}>
            <div className={s.serchMessage}>Добавить жильца для найденной квартиры</div>
                <div className={s.addUser}>
                    <div>
                        <UnickInput error={false} onChange={changePhone} value={phone}
                                    placeholder={"*тел: 8960....."}/>
                    </div>
                    <div>
                        <UnickInput error={false} onChange={changeEmail} value={eMail} placeholder={'e-mail'}/>
                    </div>
                    <div>
                        <UnickInput error={false} onChange={changeName} value={name} placeholder={'ФИО'}/>
                    </div>
                </div>
                <div className={s.boxButton}>
                    <Button size={'small'} className={s.editButton} onClick={cancellationHandler}
                            variant="outlined">отмена</Button>
                    <Button size={'small'} className={s.editButton} onClick={addUser}
                            variant="contained">добавить</Button>
                </div>
        </div>

    )
}

export default AddTenant