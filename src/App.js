import React, {useEffect,useState} from 'react';
import './App.css';
import TopBar from './MainPage/topBar.js'
import MainBody from './MainPage/mainBody';
import MobileTopBar from './MainPage/mobileTopBar';

function App() {

  const [desktop, setDesktop]=useState(false)

  useEffect(() => {
    if (window.innerWidth < 750) {
      setDesktop(true);
    } else {
      setDesktop(false);
    }
  })

  return (
    <div >
      {/* <TopBar/> */}
    {desktop? <MobileTopBar/> : <TopBar/>}
     <MainBody/>
    </div>
  );
}

export default App;
