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
        setPhone('')
    }
    const addUser = () => {
        let _phone = phone
        let _eMail = eMail
        let _name = name
        if (_phone.length < 9) return
        // let validate = /^\w+@\w+\.\w{2,4}$/i
        // if(!validate.test(eMail)) return setError(': не корректный')
        props.createNewTenants(props.flatId, _phone, _name, _eMail)
        setName('')
        setEmail('')
        setPhone('')
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
                                    placeholder={"*телефон"} error={''}/>
                    </div>
                    <div>
                        <UnickInput error={false} onChange={changeEmail} value={eMail} placeholder={'e-mail'}
                                    error={''}/>
                    </div>
                    <div>
                        <UnickInput error={false} onChange={changeName} value={name} placeholder={'ФИО'}
                                    error={''}/>
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

{/*<input*/
}
{/*value={phone}*/
}
{/*onChange={changePhone}*/
}
{/*placeholder={'телефон'}*/
}
{/*max={10}/>*/
}

{/*<input*/
}
{/*value={eMail}*/
}
{/*onChange={changeEmail}*/
}
{/*placeholder={'e-mail'}/>*/
}

{/*<input*/
}
{/*value={name}*/
}
{/*onChange={changeName}*/
}
{/*placeholder={'ФИО'}/>*/
}