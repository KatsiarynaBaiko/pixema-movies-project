import React, { FC } from "react";

import { ButtonGroupListType, ButtonGroupTypes } from "src/@types";

import ButtonGroup from "../ButtonGroup/ButtonGroup";
import styles from './ButtonGroupList.module.scss';


type ButtonGroupListProps = {
    tabsList: ButtonGroupListType;
    activeTab: ButtonGroupTypes;
    onTabClick: (tab: ButtonGroupTypes) => () => void;
    className?: string
};

const ButtonGroupList: FC<ButtonGroupListProps> = ({ tabsList, activeTab, onTabClick, className }) => {

    return (
        <div className={styles.tabsListContainer}>
            {tabsList.map(({ key, title }) => (
                <ButtonGroup
                    key={key}
                    title={title}
                    // icon={icon}
                    onClick={onTabClick(key)}
                    active={activeTab === key}
                    // disabled={disabled}
                />
            ))}
        </div>
    )
}


export default ButtonGroupList;