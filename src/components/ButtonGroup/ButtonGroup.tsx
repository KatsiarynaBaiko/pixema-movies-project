import React, { FC, ReactElement } from 'react'
import classNames from 'classnames';

import { FavouritesIcon } from 'src/assets/icons';
import { ShareIcon } from 'src/assets/icons';

import styles from './ButtonGroup.module.scss'


type ButtonGroupProps = {
    // title?: string | ReactElement;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
}

// используем фрагмент ( <>...  </>) - это
// пустой тег, когда нужно вставить куда-то группу элементов
const ButtonGroup: FC<ButtonGroupProps> = ({ onClick, disabled, className }) => {
    return (
        <>
            <div className={styles.buttonGroup}>
                <div
                    onClick={!disabled ? onClick : undefined}
                    className={classNames(styles.button, styles.rightButton, className, { [styles.disabled]: disabled })}
                >
                    <FavouritesIcon />
                </div>

                <div
                    onClick={!disabled ? onClick : undefined}
                    className={classNames(styles.button, styles.leftButton, className, { [styles.disabled]: disabled })}
                >
                    <ShareIcon />
                </div>

            </div>
        </>
    )

}

export default ButtonGroup;