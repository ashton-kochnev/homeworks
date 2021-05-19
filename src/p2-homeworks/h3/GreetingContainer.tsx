import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";
import s from "./Greeting.module.css";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
    }
    const addUser = () => {
        if (name.trim() !== '') {
            addUserCallback(name.trim())
            setName('')
            alert(`Hello ${name}!`)
        } else {
            setError('title is required')
        }
    }

    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        if (e.charCode === 13) {
            addUser()
        }
    }

    const totalUsers = users.length

    return (
        <div className={s.block}>
            <Greeting
                name={name}
                setNameCallback={setNameCallback}
                addUser={addUser}
                error={error}
                totalUsers={totalUsers}
                onKeyPress={onKeyPress}
            />
        </div>
    )
}

export default GreetingContainer
