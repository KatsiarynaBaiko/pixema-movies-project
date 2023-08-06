import React, { useState } from 'react';

import Button, { ButtonTypes } from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import Input from './components/Input';
import Title from './components/Title';
import Username from './components/Username';


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

    </div>
  );
}

export default App;
