import React, { useState, useRef } from 'react';
import './App.css';

function App() {

  const [timer, settimer] = useState(0);
  const [isActive, setisActive] = useState(false)
  const countref = useRef(null);


  const handlestartbtn = (e) => {
    console.log('handlechange');
      setisActive(true)
       countref.current = setInterval(() =>{
          settimer((timer) => timer + 1);
       }, 1000);

  }
  const handlestopbtn = (e) => {
     clearInterval(countref.current);
     settimer(0);
     setisActive(false);
  }

  const formattime = ()=>{
      const getseconds = `0 ${(timer % 60)}`.slice(-2);
      const mintues = `${Math.floor(timer / 60)}`;
      const getmintues = `0 ${(mintues % 60)}`.slice(-2);
      const gethours = `0 ${Math.floor(timer / 3600)}`.slice(-2);



      return `${gethours} : ${getmintues} : ${getseconds}`;
  }

  return (
    <div className="App">
      <h1>Stop Watch</h1>
      <p>Timer : {formattime()}</p>
      <div>
        {

        }
        <button style={{ 'marginRight': '8px' }} disabled={isActive ? true : false} onClick={handlestartbtn}>Start</button>
        <button onClick={handlestopbtn}>Stop</button>
      </div>
    </div>
  );
}

export default App;
