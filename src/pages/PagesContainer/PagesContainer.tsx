import React, { useMemo, useState } from "react"
import classNames from "classnames";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

import { TabTypes, Theme } from "src/@types";
import { FavouritesIcon, HomeIcon, SettingIcon, TrendsIcon } from "src/assets/icons";
import Header from "src/components/Header";
import TabsList from "src/components/TabsList";
import Footer from "src/components/Footer";
import { useThemeContext } from "src/context/Theme";

import styles from './PagesContainer.module.scss';
import { RoutesList } from "../Router";



//  Outlet - это все то, что внутри подменяется (наши странички условно)
// react самостоятельно контролит, какой компонент (странички) нужно менять/подтягивать по пути
const PagesContainer = () => {

    // const [activeTab, setActiveTab] = useState(TabTypes.Home);
    // const [isLoggedIn, setLoggedIn] = useState(false);
    const { pathname } = useLocation();

    // const tabsList = useMemo(
    //     () => [
    //         { type: TabTypes.Home, title: 'Home', icon: <HomeIcon />, disabled: false, link: RoutesList.Home, },
    //         { type: TabTypes.Trends, title: 'Trends', icon: <TrendsIcon />, disabled: false, link: RoutesList.Trends },
    //         { type: TabTypes.Favourites, title: 'Favourites', icon: <FavouritesIcon />, disabled: false, link: RoutesList.Favourites },
    //         { type: TabTypes.Settings, title: 'Settings', icon: <SettingIcon />, disabled: false, link: RoutesList.MySettings }
    //     ],
    //     [isLoggedIn]
    // );

    const tabsList = useMemo(
        () => [
            { title: 'Home', icon: <HomeIcon />, link: RoutesList.Home, },
            { title: 'Trends', icon: <TrendsIcon />, link: RoutesList.Trends },
            { title: 'Favourites', icon: <FavouritesIcon />, link: RoutesList.Favourites },
            { title: 'Settings', icon: <SettingIcon />, link: RoutesList.MySettings }
        ],
        []
    );

    // const onTabClick = (tab: TabTypes) => () => {
    //     setActiveTab(tab);
    //     if (tab === TabTypes.Trends) {
    //         setLoggedIn(true);
    //     }
    // };

    const { themeValue } = useThemeContext();

    return (

        <div className={classNames(styles.container, { [styles.lightContainer]: themeValue === Theme.Light })}>

            <div className={styles.header}>
                <Header />
            </div>

            <div className={styles.infoContainer}>
                <Outlet />
            </div>

            <div className={styles.containerContentSide}>
                <div className={styles.tabsList}>
                    {/* {tabsList.map(({ link, type, title, icon, disabled }) => { */}
                    {tabsList.map(({ link, title, icon}) => {
                        return (
                            <NavLink
                                key={link}
                                to={link}
                                className={classNames(styles.tab, {
                                    [styles.activeTab]: pathname === link,
                                    // [styles.disabledTab]: disabled === !isLoggedIn,
                                    [styles.lightTab]: themeValue === Theme.Light

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