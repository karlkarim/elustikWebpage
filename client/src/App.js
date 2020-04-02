import React from 'react';
import ThreeColRow from './sections/threeColRow/index';
import Header from './components/header';
import PrevWork from './sections/previousWork';
import ContactUs from './sections/contactUS';


function App() {
  return (
    <div className='container'>
      <Header/>
      <ThreeColRow />
      <PrevWork />
      <ContactUs />
    </div>
  )
}

export default App;
