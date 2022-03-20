import logo from './logo.svg';
import './App.css';
import React from "react";

function App() {
  //manipulando a idade e guardando o conteúdo digitado sempre que for alterado
  const [idade, setIdade] = React.useState(0);
  const manipularIdade = (event) => {
      setIdade(event.target.value);
  }
  // variavel criada para salvar a data completa do ano e depois utilizado um método que seleciona
  // apenas o ano atual da máquina
  const anoAtual = new Date().getFullYear();
  const [dtNascimento, setDtNascimento] = React.useState(anoAtual);
  //calculo do ano de nascimento
  const calcularAno = () =>{
    if(document.getElementById("1").checked){
      setDtNascimento(anoAtual - idade);
    }else{
      setDtNascimento((anoAtual - idade) - 1);
    }
  }
  // comparar as entradas para poder desabilitar o botao
  const desabilitarBotao = idade!=0 && dtNascimento !== anoAtual;

  const recarregarPg = () =>{
    window.location.reload();
  }
  return (
    <div className="App">
      <h1>Cálculo Ano de Nascimento</h1>
      <br/>
      <div className='check'>
      <p>Você já fez aniversário em {anoAtual}?</p>
      <input type= "checkbox" id='1'/>
      <label for = "1">Sim</label>
      <input type= "checkbox" id='2'/>
      <label for = "2">Não</label>
      <br/> <br/>
      </div>
      <label for = "idade">Digite sua idade:</label>
      <br/>
      <input type = "number" value = {idade} onChange = {manipularIdade}/>
      <br/>
      <br/>
      <label for = "anoNascimento">Ano de Nascimento:</label>
      <br/>
      <input type = "number" readonly value={dtNascimento}></input>
      <br/>
      <button onClick={calcularAno} disabled = {desabilitarBotao}>Calcular!</button>
      <button onClick={recarregarPg}>Limpar!</button>
    </div>
  );
}

export default App;
