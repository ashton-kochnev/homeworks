import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
    disabled?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red, className, disabled,
        ...restProps
    }
) => {
    const finalClassName = `${s.default} ${red ? s.red : ''} ${disabled ? s.disabled : ''}`

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    )
}

export default SuperButton
