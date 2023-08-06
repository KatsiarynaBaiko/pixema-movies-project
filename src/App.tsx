import React from 'react';

import Button, { ButtonTypes } from './components/Button';
import Title from './components/Title';

const App = () => {
  return (
    <div>

      <Button type={ButtonTypes.Primary} title={'Primary Disable'} onClick={() => { alert('Disable') }} disabled={true} />
      <Button type={ButtonTypes.Primary} title={'Primary'} onClick={() => { alert('Primary') }} />
      <Button type={ButtonTypes.Secondary} title={'Secondary'} onClick={() => { }} />

      <Title title={'Pixema movies'} />

    </div>
  );
}

export default App;
