import React, { FC, ReactElement } from "react";
import classNames from "classnames";

import { TrendsIcon } from "src/assets/icons";

import styles from './Tab.module.scss';



type TabProps = {
    title: string;
    icon?: ReactElement;
    onClick?: () => void;
    active?: boolean;
    disabled?: boolean;
}

const Tab: FC<TabProps> = ({ title, icon, onClick, active, disabled }) => {

    return (
        <div
            onClick={!disabled ? onClick : undefined}
            className={classNames(styles.tab, {
                [styles.active]: active,
                [styles.disabled]: disabled,
            })}
        >
            {icon}
            {/* <TrendsIcon /> */}
            <span>{title}</span>
        </div>
    )
}

export default Tab;
