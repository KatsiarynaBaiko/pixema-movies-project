import React, { useState } from 'react';

import { TabTypes } from './@types';
import { FavoritesIcon, HomeIcon, SettingIcon, TrendsIcon } from './assets/icons';
import Button, { ButtonTypes } from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import Card from './components/Card';
import CardsList from './components/CardsList';
import Footer from './components/Footer';
import Header from './components/Header';
import Input from './components/Input';
import Tab from './components/Tab';
import TabsList from './components/TabsList';
import Title from './components/Title';
import Username from './components/Username';
import Home from './pages/Home';
import PagesContainer from './pages/PagesContainer';
import Router from './pages/Router';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';




// в App (над App) создаем массив из мокнутых данных, на основе которых будет базироваться наш Card и CardsList
const MOCK_ARRAY = [
  {
    id: 0,
    poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    name: "Astronauts prep",
    genre: "Adventure",
    rating: 10,
  },
  {
    id: 1,
    poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    name: "Astronauts prep",
    genre: "Horror",
    rating: 5,
  },
  {
    id: 2,
    poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    name: "Astronauts prep",
    genre: "Horror",
    rating: 6,
  },
  {
    id: 3,
    poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    name: "Astronauts prep",
    genre: "Horror",
    rating: 3,
  },
  {
    id: 4,
    poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    name: "Astronauts prep",
    genre: "Horror",
    rating: 3,
  },
  {
    id: 5,
    poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    name: "Astronauts prep",
    genre: "Horror",
    rating: 5,
  },
  {
    id: 6,
    poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    name: "Astronauts prep",
    genre: "Horror",
    rating: 6,
  },
  {
    id: 7,
    poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    name: "Astronauts prep",
    genre: "Horror",
    rating: 3,
  },
  {
    id: 8,
    poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    name: "Astronauts prep",
    genre: "Horror",
    rating: 3,
  },
  {
    id: 9,
    poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    name: "Astronauts prep",
    genre: "Horror",
    rating: 3,
  },
  {
    id: 10,
    poster: 'https://img.freepik.com/free-photo/clapperboard-popcorn-film-stripe-and-cinema-tickets-on-wooden-desk_23-2148188189.jpg',
    name: "Astronauts prep",
    genre: "Horror",
    rating: 3,
  },
  {
    id: 11,
    poster: undefined,
    name: "Astronauts prep",
    genre: "Horror",
    rating: 3,
  },
  {
    id: 12,
    poster: undefined,
    name: "Astronauts prep",
    genre: "Horror",
    rating: undefined,
  },
];


const App = () => {

  // необходимо отслеживать состояние интупа => нужен useState
  const [inputValue, setInputValue] = useState('');
  const onChange = (value: string) => {
    setInputValue(value)
  }

  // табины: которые приходят
  // также отслеживаем их состояние => нужен useState
  const tabsList = [
    { key: TabTypes.Home, title: 'Home', icon: <HomeIcon />, disabled: false },
    { key: TabTypes.Trends, title: 'Trends', icon: <TrendsIcon />, disabled: false },
    { key: TabTypes.Favourites, title: 'Favourites', icon: <FavoritesIcon />, disabled: true },
    { key: TabTypes.Settings, title: 'Settings', icon: <SettingIcon />, disabled: true }
  ]
  const [activeTab, setActiveTab] = useState(TabTypes.Home)
  const onTabClick = (tab: TabTypes) => {
    return () => setActiveTab(tab)
  }


  return (
    <div>

      {/* <Button type={ButtonTypes.Primary} title={'Primary Disable'} onClick={() => { alert('Disable') }} disabled={true} />
      <Button type={ButtonTypes.Primary} title={'Primary'} onClick={() => { alert('Primary') }} />
      <Button type={ButtonTypes.Secondary} title={'Secondary'} onClick={() => { }} />

      <Title title={'Pixema movies'} />

      <ButtonGroup onClick={() => { alert('Disable') }} disabled={true} />
      <ButtonGroup onClick={() => { alert('Disable') }} />

      <Input
        title={'Test Input'}
        placeholder={'Error'}
        onChange={onChange}
        value={inputValue}
        errorText={'Error'}
      />
      <Input
        title={'Test Input'}
        placeholder={'Disable'}
        onChange={onChange}
        value={inputValue}
        disabled={true}
      />
      <Input
        title={'Test Input'}
        placeholder={'Focus and Default'}
        onChange={onChange}
        value={inputValue}
      />

      <Username username={'Katsiaryna Baiko'} />

      <Footer footer={'© All rights reserved'} />

      <SignUp />

      <SignIn />


      <Card card={{
        id: 0,
        name: '',
        genre: '',
        poster: undefined,
        rating: undefined,
      }} />

      <Card card={{
        id: 1,
        name: 'Mister Smith',
        genre: '',
        poster: '',
        rating: 3,
      }} />

      <Card card={{
        id: 2,
        name: 'Mister Smith',
        genre: 'Adventure',
        poster: 'https://gamerwall.pro/uploads/posts/2022-02/1645708691_1-gamerwall-pro-p-astronavt-v-kosmose-krasivie-oboi-1.jpg',
        rating: 6,
      }} />

      <Card card={{
        id: 3,
        name: 'Mister Smith',
        genre: 'Adventure',
        poster: 'https://gamerwall.pro/uploads/posts/2022-02/1645708691_1-gamerwall-pro-p-astronavt-v-kosmose-krasivie-oboi-1.jpg',
        rating: 8,
      }} />

      <Card card={{
        id: 4,
        name: 'Mister Smith',
        genre: 'Adventure',
        poster: '',
        rating: 10,
      }} />

      <CardsList cardsList={MOCK_ARRAY} />

      <Tab title={'Favourites'} />

      <TabsList
        tabsList={tabsList}
        activeTab={activeTab}
        onTabClick={onTabClick}
      />

      <Header /> */}

      {/* <PagesContainer/> */}

      {/* <Home /> */}

      <Router />


    </div>
  );
}

export default App;
