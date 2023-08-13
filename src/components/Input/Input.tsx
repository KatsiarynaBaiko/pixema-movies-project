import React, { FC, KeyboardEvent, ChangeEvent } from "react";
import classNames from "classnames";

import { useThemeContext } from "src/context/Theme";
import { Theme } from "src/@types";

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

    const { themeValue } = useThemeContext();

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className={classNames(styles.container, className, {[styles.lightContainer]: themeValue === Theme.Light})}>
            <div className={classNames(styles.title, {[styles.lightTitle] : themeValue === Theme.Light})}>{title}</div>
            
            <input
                onChange={onInputChange}
                value={value}
                placeholder={placeholder}
                className={classNames(styles.input, {
                    [styles.disabled]: disabled,
                    [styles.errorInput]: errorText,
                    [styles.lightInput]: themeValue === Theme.Light
                })}
            />
            {errorText && <div className={styles.errorText}>{errorText}</div>}
        </div>
    )
}

// step 2
export default Input