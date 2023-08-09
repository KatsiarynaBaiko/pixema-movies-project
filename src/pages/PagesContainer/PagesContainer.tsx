import React, { useMemo, useState } from "react"
import classNames from "classnames";
import { Outlet } from "react-router-dom";

import { TabTypes } from "src/@types";
import { FavoritesIcon, HomeIcon, SettingIcon, TrendsIcon } from "src/assets/icons";
import Header from "src/components/Header";
import TabsList from "src/components/TabsList";
import Footer from "src/components/Footer";

import styles from './PagesContainer.module.scss';

// так вот Outlet - это все то, что внутри подменяется (наши странички условно)
// react самостоятельно контролит, какой компонент (странички) нужно менять/подтягивать по пути
const PagesContainer = () => {

    const [activeTab, setActiveTab] = useState(TabTypes.Home);
    const [isLoggedIn, setLoggedIn] = useState(false);

    const tabsList = useMemo(
        () => [
            { key: TabTypes.Home, title: 'Home', icon: <HomeIcon />, disabled: false },
            { key: TabTypes.Trends, title: 'Trends', icon: <TrendsIcon />, disabled: false },
            { key: TabTypes.Favourites, title: 'Favourites', icon: <FavoritesIcon />, disabled: !isLoggedIn },
            { key: TabTypes.Settings, title: 'Settings', icon: <SettingIcon />, disabled: false }
        ],
        [isLoggedIn]
    );

    const onTabClick = (tab: TabTypes) => () => {
        setActiveTab(tab);
        if (tab === TabTypes.Trends) {
            setLoggedIn(true);
        }
    };


    return (

        <div className={styles.container}>

            <div className={styles.header}>
                <Header />
            </div>

            <div className={styles.infoContainer}>
                <Outlet />
            </div>

            <div className={styles.containerContentSide}>
                <div className={styles.tabsList}>
                    <TabsList
                        tabsList={tabsList}
                        activeTab={activeTab}
                        onTabClick={onTabClick}
                    />
                </div >
                <div className={styles.footer}>
                    <Footer footer={'© All rights reserved'} className={styles.footerSecondary} />
                </div>
            </div>
        </div >
    );
};

export default PagesContainer;