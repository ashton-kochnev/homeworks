import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './SuperCheckbox.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (value: boolean) => void
}

const SuperCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type,
        onChange, onChangeChecked,
        className,
        children,

        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)

        onChangeChecked && onChangeChecked(e.currentTarget.checked)
    }

    const finalInputClassName = `${s.checkbox}`

    return (
        <div>
            <label>
                <input
                    type={'checkbox'}
                    onChange={onChangeCallback}
                    className={finalInputClassName}

                    {...restProps}
                />
                {children && <span className={s.spanClassName}>{children}</span>}
            </label>
        </div>
    )
}

export default SuperCheckbox
