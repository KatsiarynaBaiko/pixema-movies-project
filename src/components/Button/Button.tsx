
import React, { FC, ReactElement } from 'react'
import classNames from 'classnames';
import styles from './Button.module.scss'


// два фиксированных свойства Button
export enum ButtonTypes {
    Primary = 'primary',
    Secondary = 'secondary',
}

// типизация Button 
// ReactElement - возможность вставлять икноки в Button
type ButtonProps = {
    type: ButtonTypes;
    title: string | ReactElement;
    onClick: () => void;
    disabled?: boolean; // для состояния кнопочки и необязательная
    className?: string;
}

// компонент Button
const Button: FC<ButtonProps> = ({ type, title, onClick, disabled, className }) => {

    const buttonStyle = styles[type]

    return (
        <div
            onClick={!disabled ? onClick : undefined}
            className={classNames(buttonStyle, className, { [styles.disabled]: disabled })}>
            {title}
        </div>
    );

}

export default Button;