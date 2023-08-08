import React, { FC } from "react";
import styles from './TabsList.module.scss';
import { TabsListType, TabTypes } from "src/@types";
import Tab from "../Tab";


type TabsListProps = {
    tabsList: TabsListType;
    activeTab: TabTypes;
    onTabClick: (tab: TabTypes) => () => void;
};

const TabsList: FC<TabsListProps> = ({ tabsList, activeTab, onTabClick }) => {

    return (
        <div className={styles.tabsListContainer}>
            {tabsList.map(({ key, title, icon, disabled }) => (
                <Tab
                    key={key}
                    title={title}
                    icon={icon}
                    onClick={onTabClick(key)}
                    active={activeTab === key}
                    disabled={disabled}
                />
            ))}
        </div>
    )
}


export default TabsList;
