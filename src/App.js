import React, {useState} from 'react';
import './App.css';
import MyBody from './MyBody.js';

function App() {
  
  const [str, setStr] = useState('Olá mundo');

  function handleClick() {
    setStr('Olá Danki Code');
  }
  
  return (
    <div className="App">
      <h2>{str}</h2>
      <MyBody conteudo="Body1"></MyBody>
      <MyBody conteudo="Body2"></MyBody>
      <MyBody conteudo="Body3"></MyBody>
    </div>
  );
}

export default App;
