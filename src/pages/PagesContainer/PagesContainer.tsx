import React, { useMemo, useState } from "react"
import classNames from "classnames";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

import { TabTypes } from "src/@types";
import { FavoritesIcon, HomeIcon, SettingIcon, TrendsIcon } from "src/assets/icons";
import Header from "src/components/Header";
import TabsList from "src/components/TabsList";
import Footer from "src/components/Footer";

import styles from './PagesContainer.module.scss';
import { RoutesList } from "../Router";

// так вот Outlet - это все то, что внутри подменяется (наши странички условно)
// react самостоятельно контролит, какой компонент (странички) нужно менять/подтягивать по пути
const PagesContainer = () => {

    const [activeTab, setActiveTab] = useState(TabTypes.Home);
    const [isLoggedIn, setLoggedIn] = useState(false);
    const { pathname } = useLocation();

    const tabsList = useMemo(
        () => [
            { type: TabTypes.Home, title: 'Home', icon: <HomeIcon />, disabled: false, link: RoutesList.Home, },
            { type: TabTypes.Trends, title: 'Trends', icon: <TrendsIcon />, disabled: false, link: RoutesList.Trends },
            { type: TabTypes.Favourites, title: 'Favourites', icon: <FavoritesIcon />, disabled: false, link: RoutesList.Favourites },
            { type: TabTypes.Settings, title: 'Settings', icon: <SettingIcon />, disabled: false, link: RoutesList.MySettings }
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
                    {tabsList.map(({ link, type, title, icon, disabled }) => {
                        return (
                            <NavLink
                                key={link}
                                to={link}
                                className={classNames(styles.tab, {
                                    [styles.activeTab]: pathname === link,
                                    [styles.disabledTab]: disabled === !isLoggedIn,
                                    
                                })}
                            >
                                {icon}
                                {title}
                            </NavLink>
                        )
                    })}
                </div >

                <div className={styles.footer}>
                    <Footer footer={'© All rights reserved'} className={styles.footerSecondary} />
                </div>
            </div>
        </div >
    );
};

export default PagesContainer;