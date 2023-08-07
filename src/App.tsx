import React, { useState } from 'react';
import Button, { ButtonTypes } from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import Card from './components/Card';
import Footer from './components/Footer';
import Input from './components/Input';
import Title from './components/Title';
import Username from './components/Username';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


const App = () => {

  // необходимо отслеживать состояние интупа => нужен useState
  const [inputValue, setInputValue] = useState('');
  const onChange = (value: string) => {
    setInputValue(value)
  }

  return (
    <div>

      <Button type={ButtonTypes.Primary} title={'Primary Disable'} onClick={() => { alert('Disable') }} disabled={true} />
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




    </div>
  );
}

export default App;
