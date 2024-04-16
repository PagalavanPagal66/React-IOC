import { useEffect, useState } from 'react';
import './App.css';

// function App(props) {
//   return (
//     <div className="App">
//       <Person name = {"pagal"} age = {20} gender = {"Male"}/>
//       <Person name = {"sri arun"} age = {27} gender = {"Male"}/>
//       <p>{props.cycle}</p>
//     </div>
//   );
// }

// const Person = (props) =>{
//   return (
//     <>
//       <p>Name - {props.name} , Age - {props.age} , Gender - {props.gender}</p>
//       {/* <App cycle = "true"></App> */}
//     </>
//   );
// }

// const Caller = () =>{
//   return (
//     <>
//     <h1>H1 TAG</h1>
//     <h2>H2 TAG</h2>
//     This is the fragment
//     </>
//   );
// }
// const Arun = () =>{
//   return (
//     <p>Arun</p>
//   );
// }

// function App(){
//   const test = (props) => {
//     alert(props.name);
//   }
//   return (
//     <button onClick={()=> test({name : "Arun"})}>Namer</button>
//   );
// }

var output = 0;

const App = () => {
  const [value1 , setValue1] = useState(0);
  const [value2 , setValue2] = useState(0);
  const [reset, setReset] = useState(false);
  const [output,setOutput] = useState(0);
  useEffect(
    ()=>{
      setValue1(0);
      setValue2(0);
      setOutput(0);
    },[reset]
  )
  
  const handle_val1_change = (e) =>{
    setValue1(e.target.value)
  }

  const handle_val2_change = (e) =>{
    setValue2(e.target.value)
  }

  return (
    <>
      <h1>Arithmetics using React</h1>
      <form>
        <input type="text" placeholder="Enter value 1" required onChange={handle_val1_change}></input>
        <input type="text" placeholder="Enter value 2" required onChange={handle_val2_change}></input>
        <input type="reset" value="Reset" onClick={()=>{setReset(!reset)}}></input>
      </form>
      <h1>VALUE1 = {value1} , VALUE2 = {value2}</h1>
      <div class = "buttons">
        <button class = "button" onClick={()=>{setOutput(Number(value1)+Number(value2));
               }}>ADD</button>
        <button class = "button" onClick={()=>{setOutput(Number(value1)-Number(value2));
                }}>SUB</button>
        <button class = "button" onClick={()=>{setOutput(Number(value1)*Number(value2));
          }}>MUL</button>
        <button class = "button" onClick={()=>{setOutput(Number(value1)/Number(value2));
            }}>DIV</button>
      </div>
      <h1>{output}</h1>
    </>
  );
}
export default App;