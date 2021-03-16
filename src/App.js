import React, {useEffect, useState} from 'react';
import './App.css';
import MyBody from './MyBody.js';

function App() {
  
  const [lista, setarLista] = useState([
    {
      'nome': 'maçã',
      'cor': 'vermelha'
    },
    {
      'nome': 'uva'
    },
    {
      'nome': 'pera'
    }
  ]);

  // Função que adiciona fruta a lista
  // function addFruta(nomeFruta) {
    
  // }

  // Função executada apenas uma vez ao inicializar um componente
  useEffect(() => {
    setarLista([...lista, {'nome': 'melancia'}]);
  },[])
  
  return (
    <div className="App">
      {
        lista.map((val) => {
          return(
            <h2>{val.nome} e tem a cor {val.cor}</h2>
          );
        })
      }
      {/* <button onClick={() => addFruta()}>Clique aqui</button> */}
    </div>
  );
}

export default App;
