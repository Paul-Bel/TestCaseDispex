import React from "react";
import s from './addTenant.module.css'

export const AddTenant = () => {

    return (
        <div className={s.blockAddTenant}>
            <div>
                <button>+</button>
                <input type="text" placeholder={'добавить жильца'}/></div>
            <div className={s.addTenantBoxInput}>
                <div>
                <span className={{color: 'red'}}>*<span>Телефон</span></span>
                <div><input placeholder={'телефон'}/></div>
            </div>
            <div>
                <span>E-mail</span>
                <div><input placeholder={'e-mail'}/></div>
            </div>
            <div>
                <span>Ф.И.О.</span>
                <div><input placeholder={'ФИО'}/></div>
            </div>
            </div>

            <button>отмена</button>
            <button>добавить</button>
        </div>

    )
}