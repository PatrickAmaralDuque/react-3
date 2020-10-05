import React from 'react';
import logo from './logo.svg';
import Axios from 'axios';
import './App.css';

  var 
  Texto = "Utilize o seguinte codigo no CMD:",
  Texto1 = "Caso não funcione, execute o seguinte codigo e tente novamente:",
  Texto2 = "'Antes de usar o codigo use 'CD' para colocar na pasta do arquivo'",
  Texto3 = "recomendo a utilização desta extensão para ver melhor" ,
  Texto4 = "Este Botão ira lhe redirecionar para a api";

  var Codigo = "nodemon src/Api",
  Alternativa = "npm install -g nodemon",
  Link = "";


//fazer isso sem o video foi complicado
  
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {Texto}
        </p>
        
        <p>
          {Texto2}
        </p>
        <label>{Codigo}</label>
        <p>
        {Texto1}
        </p>
        <label>{Alternativa}</label>
        <p>
        {Texto3}
        </p>
        <button onClick={function Abrir(){window.location.href="https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh"}}>Extensão</button>
        <p>
        {Texto4}
        </p>
      <button onClick={function Abrir(){window.location.href="http://localhost:3100/api"}}>Informações</button>
      </header>
    </div>
  );
}

export default App;
