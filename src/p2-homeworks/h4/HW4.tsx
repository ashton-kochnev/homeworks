import React, {ChangeEvent, useState} from 'react'
import SuperInputText from './common/c1-SuperInputText/SuperInputText'
import s from './HW4.module.css'
import SuperButton from './common/c2-SuperButton/SuperButton'
import SuperCheckbox from './common/c3-SuperCheckbox/SuperCheckbox'

function HW4() {
    const [text, setText] = useState<string>('')
    const [error, setError] = useState<string | null>(null)

    const showAlert = () => {
        if (text.trim() !== '') {
            alert(text.trim())
            setText('')
        } else {
            alert('введите текст...')
            setError('errorka')
        }
    }

    const [checked, setChecked] = useState<boolean>(false)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    return (
        <div>
            <hr/>

            <div className={s.column}>
                <SuperInputText
                    value={text}
                    onChangeText={setText}
                    onEnter={showAlert}
                    error={error}
                    setError={setError}
            />

                <SuperInputText className={s.blue}/>

                {/*----------------------------------------------------*/}

                <SuperButton>
                    default
                </SuperButton>

                <SuperButton red onClick={showAlert}>
                    delete
                </SuperButton>

                <SuperButton disabled>
                    disabled
                </SuperButton>

                {/*----------------------------------------------------*/}

                <SuperCheckbox onChangeChecked={setChecked}>
                    some text
                </SuperCheckbox>

                <SuperCheckbox checked={checked} onChange={testOnChange}/>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperInputText/>*/}
            {/*<AlternativeSuperButton/>*/}
            {/*<AlternativeSuperCheckbox/>*/}
            <hr/>
        </div>
    )
}

export default HW4
