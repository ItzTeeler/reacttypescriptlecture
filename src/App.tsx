import React, {useEffect, useState} from 'react';
import './App.css';
import getData from './DataServices/DataServices';
import Astronaut from './Interfaces/interface';
import AstronautComponent from './Components/AstronautComponent';

function App() {

  const [astronautInfo, setAstronautInfo] =  useState<Astronaut>();
  let [count, setCount] = useState<number>(0);


  useEffect(() =>{
    const astronautData = async () =>{
      const fetchData = await getData();
      setAstronautInfo(fetchData);
    }
    astronautData();
  }, [])

  const nextPage = () => {
    setCount(count + 1)
  }
  return (
    <div>
      <button onClick={() => nextPage()}>Next Page</button>
      {
       astronautInfo && <AstronautComponent shipName={astronautInfo.crafts[count].shipName} members={astronautInfo.crafts[count].members}/>
      }
      
    </div>
  );
}

export default App;
