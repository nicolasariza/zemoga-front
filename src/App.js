import { useState, useEffect } from 'react';
import './App.css';
import Main from './components/main';
import Title from './components/title';


function App() {

  const [portfolio, setPortfolio] = useState({});

  const consultarAPI = async () =>{
    const api = await fetch('https://1x5bhimkod.execute-api.us-east-1.amazonaws.com/dev/portfolio/f6294e80-093d-11ec-9508-bffe8afe8da3');
    const resultado = await api.json();
    setPortfolio(resultado);
  }

  useEffect(()=>{
    consultarAPI();
  },[]);

  return (
    <div className="App">
      <Title portfolio={portfolio}/>
      <Main portfolio={portfolio}/>
    </div>
  );
}

export default App;
