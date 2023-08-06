import React from 'react';

import Button, { ButtonTypes } from './components/Button';
import ButtonGroup from './components/ButtonGroup';
import Title from './components/Title';

const App = () => {
  return (
    <div>

      <Button type={ButtonTypes.Primary} title={'Primary Disable'} onClick={() => { alert('Disable') }} disabled={true} />
      <Button type={ButtonTypes.Primary} title={'Primary'} onClick={() => { alert('Primary') }} />
      <Button type={ButtonTypes.Secondary} title={'Secondary'} onClick={() => { }} />

      <Title title={'Pixema movies'} />

      <ButtonGroup title={'ButtonGroup 1'} onClick={() => { alert('Disable') }} disabled={true} />
      <ButtonGroup title={'ButtonGroup 2'} onClick={() => { alert('Disable') }} />
    
    </div>
  );
}

export default App;
