import React, {useState} from "react";


export const Tenants = (props) => {
    const [isDone, setIsDone] = useState(true)
    const [valueName, setValueName] = useState('')
    const [valuePhone, setValuePhone] = useState('')
    const [valueEmail, setValueEmail] = useState('')
    const nameOnBlur = () => {
        setIsDone(true)

    }
    let Name = valueName.length === 0 ? props.users.name : valueName
    let Phone = valuePhone.length === 0 ? props.users.phone : valuePhone
    let Email = valueEmail.length === 0 ? props.users.email : valueEmail
    return (
        <div>
            <div>👨Имя: {isDone ? Name
                : <input
                value={valueName}
                onChange={(e) => setValueName(e.currentTarget.value)}
                onBlur={nameOnBlur}/>}</div>
            <div>☎Тел: {isDone ? Phone
                : <input
                    value={valuePhone}
                    onChange={(e) => setValuePhone(e.currentTarget.value)}
                    onBlur={nameOnBlur}/>}</div>
            <div>✉mail: {isDone ? Email
                : <input
                    value={valueEmail}
                    onChange={(e) => setValueEmail(e.currentTarget.value)}
                    onBlur={nameOnBlur}/>}</div>
            <button onClick={() => props.deleteUserOfFlat(props.users.bindId)}>del</button>
            <button onClick={() => setIsDone(false)}>edit</button>
        </div>
    )
}