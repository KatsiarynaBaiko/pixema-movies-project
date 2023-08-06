import React from 'react';

import Button, { ButtonTypes } from './components/Button';

const App = () => {
  return (
    <div>

      <Button type={ButtonTypes.Primary} title={'Primary Disable'} onClick={() => { alert('Disable') }} disabled={true} />
      <Button type={ButtonTypes.Primary} title={'Primary'} onClick={() => { alert('Primary') }} />
      <Button type={ButtonTypes.Secondary} title={'Secondary'} onClick={() => { }} />

    </div>
  );
}

export default App;
