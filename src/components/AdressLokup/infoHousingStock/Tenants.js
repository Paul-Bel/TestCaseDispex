import React, {useState} from "react";
import {Fab} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import s from './infoHousing.module.css'
import {ContactPage} from "@mui/icons-material";


export const Tenants = (props) => {
    const [isDone, setIsDone] = useState(true)
    const [valueName, setValueName] = useState(props.users.name || "")
    const [valuePhone, setValuePhone] = useState(props.users.phone || "")
    const [valueEmail, setValueEmail] = useState(props.users.email || "")
    const nameOnBlur = () => {
        setIsDone(true)
    }
    let Name = valueName.length === 0 ? props.users.name : valueName
    let Phone = valuePhone.length === 0 ? props.users.phone : valuePhone
    let Email = valueEmail.length === 0 ? props.users.email : valueEmail
    return (
        <div className={s.tenants}>
            <div className={s.infoGroup}>
                <div className={s.infoTenants}><div className={s.name}><span><ContactPage/></span> <span>Имя: </span></div>{isDone ? <span className={s.infoUser}>{Name}</span>
                    : <input
                        value={valueName}
                        onChange={(e) => setValueName(e.currentTarget.value)}
                        onBlur={nameOnBlur}/>}</div>
                <div className={s.infoTenants}><div className={s.name}><span>☎</span><span>Тел:</span> </div>{isDone ? <span className={s.infoUser}>{Phone}</span>
                    : <input
                        value={valuePhone}
                        onChange={(e) => setValuePhone(e.currentTarget.value)}
                        onBlur={nameOnBlur}/>}</div>
                <div className={s.infoTenants}><div className={s.name}><span>✉</span><span>e-mail:</span> </div>{isDone ? <span className={s.infoUser}>{Email}</span>
                    : <input
                        value={valueEmail}
                        onChange={(e) => setValueEmail(e.currentTarget.value)}
                        onBlur={nameOnBlur}/>}</div>
            </div>
            <div className={s.blockButton}>
                <Fab size={'small'} color="primary" aria-label="add"
                     onClick={() => props.deleteUserOfFlat(props.users.bindId)}>
                    <DeleteForeverRoundedIcon/>
                </Fab>
                <Fab size={'small'} color="secondary" aria-label="edit" onClick={() => setIsDone(false)}>
                    <EditIcon/>
                </Fab>
            </div>
        </div>
    )
}
