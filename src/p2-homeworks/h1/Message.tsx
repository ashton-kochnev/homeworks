import React from 'react'
import style from './Message.module.css'

type PropsType = {
    message: string
    avatar: string
    name: string
    time: string
}

function Message(props: PropsType) {
    return (
        <div className={style.wrapper}>
            <img src={props.avatar} alt='avatar' className={style.image}/>
            <div className={style.block}>
                <div>{props.name}</div>
                <div className={style.message}>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
            <svg height="0" width="0">
                <defs>
                    <clipPath id="left-droplet">
                        <path d="M 10,0 A 10,10 0 0 1 0,10 H 16 V 0 Z"/>
                    </clipPath>
                </defs>
            </svg>
        </div>
    )
}

export default Message
