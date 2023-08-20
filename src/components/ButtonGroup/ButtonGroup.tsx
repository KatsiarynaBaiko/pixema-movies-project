import React, { FC, ReactElement } from 'react'
import classNames from 'classnames';

import { FavouritesIcon } from 'src/assets/icons';
import { ShareIcon } from 'src/assets/icons';
import { useThemeContext } from 'src/context/Theme';
import { Theme } from 'src/@types';

import styles from './ButtonGroup.module.scss'



// type ButtonGroupProps = {
//     // title?: string | ReactElement;
//     onClick?: () => void;
//     disabled?: boolean;
//     className?: string;
// }

// используем фрагмент ( <>...  </>) - это
// пустой тег, когда нужно вставить куда-то группу элементов
// const ButtonGroup: FC<ButtonGroupProps> = ({ onClick, disabled, className }) => {

//     const { themeValue } = useThemeContext();

//     return (
//         <>
//             <div className={styles.buttonGroup}>
//                 <div
//                     onClick={!disabled ? onClick : undefined}
//                     className={classNames(styles.button, styles.rightButton, className, { [styles.disabled]: disabled, [styles.lightButton] : themeValue === Theme.Light })}
//                 >
//                     <FavouritesIcon />
//                 </div>

//                 <div
//                     onClick={!disabled ? onClick : undefined}
//                     className={classNames(styles.button, styles.leftButton, className, { [styles.disabled]: disabled, [styles.lightButton] : themeValue === Theme.Light })}
//                 >
//                     <ShareIcon />
//                 </div>

//             </div>
//         </>
//     )

// }

// version 2. Не как кнопки, а как Tab

type ButtonGroupProps = {
    title: string | ReactElement;
    // icon: ReactElement;
    onClick?: () => void;
    active?: boolean;
    // disabled?: boolean;
}


const ButtonGroup: FC<ButtonGroupProps> = ({ title, onClick, active}) => {

    const { themeValue } = useThemeContext();

    return (
        <div
            // onClick={!disabled ? onClick : undefined}
            onClick={onClick}
            className={classNames(styles.tab, {
                [styles.active]: active,
                [styles.lightTab] : themeValue === Theme.Light,
                // [styles.disabled]: disabled,
            })}
        >
            {title}
            {/* <FavouritesIcon /> */}
            {/* <span>{title}</span> */}
        </div>
    )
}

export default ButtonGroup;