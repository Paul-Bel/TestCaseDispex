import React, {useState} from "react";
import s from './addTenant.module.css'


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
        if(_phone.length < 9) return
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
            <div>
                <button>+</button>
                <input
                    type="text"
                    placeholder={`добавить жильца`}/></div>
            <div className={s.addTenantBoxInput}>
                <div>
                    <span className={{color: 'red'}}>*<span>Телефон</span></span>
                    <div><input
                        value={phone}
                        onChange={changePhone}
                        placeholder={'телефон'}
                        max={10}/></div>
                </div>
                <div>
                    <span>E-mail{error}</span>
                    <div><input
                        value={eMail}
                        onChange={changeEmail}
                        placeholder={'e-mail'}/></div>
                </div>
                <div>
                    <span>Ф.И.О.</span>
                    <div><input
                        value={name}
                        onChange={changeName}
                        placeholder={'ФИО'}/></div>
                </div>
            </div>

            <button onClick={cancellationHandler}>отмена</button>
            <button onClick={addUser}>добавить</button>
        </div>

    )
}

export default AddTenant