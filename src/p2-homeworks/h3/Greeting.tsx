import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onKeyPress: (e: KeyboardEvent<HTMLInputElement>) => void
}

const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers, onKeyPress}) => {
    const inputClass = error ? s.error : s.input

    return (
        <div className={s.wrapper}>
            <div className={s.inputBlock}>
                <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPress}/>
                {error && <span>{error}</span>}
            </div>
            <button className={s.button} onClick={addUser}>add</button>
            <span >{totalUsers}</span>
        </div>
    )
}

export default Greeting
