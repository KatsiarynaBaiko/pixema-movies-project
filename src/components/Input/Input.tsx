import React, { FC, KeyboardEvent, ChangeEvent } from "react";
import classNames from "classnames";
import styles from './Input.module.scss';


type InputProps = {
    title?: string;
    placeholder: string;
    onChange: (value: string) => void;
    value: string;
    disabled?: boolean;
    errorText?: string;
    className?: string;
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
};


// для onChange необходим e.tagret
// => создаем const onInputChang и передаем еe
const Input: FC<InputProps> = ({ title, errorText, placeholder, onChange, disabled, value, className, onKeyDown }) => {

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.title}>{title}</div>
            <input
                onChange={onInputChange}
                value={value}
                placeholder={placeholder}
                className={classNames(styles.input, {
                    [styles.disabled]: disabled,
                    [styles.errorInput]: errorText,
                })}
            />
            {errorText && <div className={styles.errorText}>{errorText}</div>}
        </div>
    )
}

// step 2
export default Input