import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div>
            <span>{props.affair.name}</span>
            <span>{props.affair.priority}</span>
            <button className={s.default} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
