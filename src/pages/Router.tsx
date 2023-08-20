import React from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import PagesContainer from "./PagesContainer"
import Home from "./Home"
import Trends from "./Trends"
import Favourites from "./Favourites"
import MySettings from "./MySettings"
import SelectedPost from "./SelectedPost"
import Search from "./Search"
import SignIn from "./SignIn"
import SignUp from "./SignUp"



//  enum, так как наши пути захардкожены(неизменны)
export enum RoutesList {
    Home = "/",
    Trends = "/trends",
    Favourites = "/favourites",
    MySettings = "/my-settings",
    // SelectedPost = "selected-post",
    SelectedPost = '/titles/:id',
    // Search = "search",
    Search = '/titles/search/title/:title',
    SignUp = "/sign-up",
    SignIn = "/sign-in",
    Default = "*",
}

// возвращает нам <BrowserRouter> </BrowserRouter> 
// у котогоро внутри <Routes> </Routes>
// в зависимости от того, какие есть странички у нас появляется путь Route 
// ---
// добавляем оберточный роутер, который оборачивает внутренние пути (то, что внутри будет меняться)
// <Route path={RoutesList.Home} element={<Header /> }/>
{/* <Route path={RoutesList.Home} element={<PagesContainer />}>  */ }

const Router = () => {

    return <BrowserRouter>
        <Routes>
            <Route path={RoutesList.Home} element={<PagesContainer />}>
                <Route path={RoutesList.Home} element={<Home />} />
                <Route path={RoutesList.Trends} element={<Trends />} />
                <Route path={RoutesList.Favourites} element={<Favourites />} />
                <Route path={RoutesList.MySettings} element={<MySettings />} />
                <Route path={RoutesList.SelectedPost} element={<SelectedPost />} />
                <Route path={RoutesList.Search} element={<Search />} />
                <Route path={RoutesList.Default} element={<Navigate to={RoutesList.Home} />} />
            </Route>
            <Route path={RoutesList.SignUp} element={<SignUp />} />
            <Route path={RoutesList.SignIn} element={<SignIn />} />
        </Routes>
    </BrowserRouter>
}

export default Router