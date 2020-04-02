import React from 'react';
import ThreeColRow from './sections/threeColRow/index';
import Header from './components/header';
import TextField from './components/TextField/index';
import EmailInput from './components/EmailInput/index';


function App() {
  return (
    <div className='containers'>
      <Header/>
      <ThreeColRow />
      <EmailInput/>
      <TextField/>
    </div>
  )
}

export default App;
