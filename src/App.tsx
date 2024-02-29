import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import getData from './DataServices/DataServices';
import Astronaut from './Interfaces/interface';

function App() {

  const [astronautInfo, setAstronautInfo] =  useState<Astronaut>();

  useEffect(() =>{
    const astronautData = async () =>{
      const fetchData = await getData();
      setAstronautInfo(fetchData);
    }
    astronautData();
  }, [])
  return (
    <div>
      <h1>{astronautInfo && astronautInfo.people.map(person => `${person.name} one ${person.craft}`)}</h1>
    </div>
  );
}

export default App;
