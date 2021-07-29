
import '../App.css';
import React from "react";




export class Etapa1 extends React.Component {
    render() {
  return (
    <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <div>
            <h3> Qual o seu nome? </h3>
            <input></input> 
        </div>
        <div>
            <h3> Qual sua idade? </h3>
            <input></input> 
        </div>

        <div>
            <h3> Qual seu e-mail? </h3>
            <input></input> 
        </div>
        <div>
            <h3> Qual sua escolaridade? </h3>
            <input></input> 
        </div>
    </div>
  );
}
}

export default Etapa1;