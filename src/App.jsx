import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDo from './ToDo'
import Counter from './Counter'
import Users from './Users'

function App() {

  function buttonHandler(){
    window.open("https://classroom.google.com/u/1/", "_blank");
  }
  function addSeven(num){
    alert(num + 7 +", Noice!");
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Sum num1 = "10" num2 = "20"></Sum>
      <Sum num1 = "30" num2 = "60"></Sum>
      <Sum num1 = "90" num2 = "20"></Sum>
      <Characters name = "Luffy" role = "Captain"></Characters>
      <Characters name = "Zoro" role = "Swordman"></Characters>
      <Characters name = "Nami" role = "Navigator"></Characters>
      <Characters name = "Carrot"></Characters>
      <ToDo name = "Networking Project" workDone = {0}></ToDo>
      <ToDo name = "Web Programming Project" workDone = {10}></ToDo>
      <ToDo name = "IDP Project" workDone = {20}></ToDo>
      <button onClick={buttonHandler}>Learn More</button>
      <button onClick={() => {window.open("https://chatgpt.com/", "_blank");}}>Get Help</button>
      <button onClick={()=> {addSeven(62)}}>Add 7</button>
      <Counter></Counter>
      <Users></Users>
    </>
  )
}
 
function Sum(props){
  const num1 = +props.num1;
  const num2 = +props.num2;
  return (
  <h2 className='myClass'>The sum of {num1} and {num2} is {num1 + num2}</h2>
  )
}

function Characters({name, role = "member"}){
  const charStyle = {
    border: '2px solid salmon',
    borderRadius: '5px',
    padding: '10px',
  }
  return (
    <h2 style={charStyle}>{name} is the {role} of Straw Hat Pirates</h2>
  )
}

export default App
