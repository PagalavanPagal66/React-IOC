import { useEffect, useState ,useReducer } from 'react';
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

// var output = 0;

// const App = () => {
//   const [value1 , setValue1] = useState(0);
//   const [value2 , setValue2] = useState(0);
//   const [reset, setReset] = useState(false);
//   const [output,setOutput] = useState(0);
  
//   useEffect(
//     ()=>{
//       setValue1(0);
//       setValue2(0);
//       setOutput(0);
//     },[reset]
//   )
  
//   const handle_val1_change = (e) =>{
//     setValue1(e.target.value);
//     console.log(e.target.value.type);
//     console.log(Number(e.target.value).type);
//     const v = 1;
//     console.log(v.type);
//   }

//   const handle_val2_change = (e) =>{
//     setValue2(e.target.value)
//   }

//   return (
//     <div class="appdiv">
//       <h1>Arithmetics using React</h1>
//       <form class = "form">
//         <input class = "inp1" type="text" placeholder="Enter value 1" required onChange={handle_val1_change}></input>
//         <input class = "inp2" type="text" placeholder="Enter value 2" required onChange={handle_val2_change}></input>
//         <input class = "reset" type="reset" value="Reset" onClick={()=>{setReset(!reset)}}></input>
//       </form>
//       {value1 !== '' && value2 !== '' ? <h1>VALUE1 = {value1} , VALUE2 = {value2}</h1> : <h1>Give Both values</h1>}
//       <div class = "buttons">
//         <button class = "button" onClick={()=>{setOutput(Number(value1)+Number(value2));
//                }}>ADD</button>
//         <button class = "button" onClick={()=>{setOutput(Number(value1)-Number(value2));
//                 }}>SUB</button>
//         <button class = "button" onClick={()=>{setOutput(Number(value1)*Number(value2));
//           }}>MUL</button>
//         <button class = "button" onClick={()=>{setOutput(Number(value1)/Number(value2));
//             }}>DIV</button>
//       </div>
//       <h1>{output.toFixed(2)}</h1>
//     </div>
//   );
// }

// const initialState = {counter : 0};

// const reducer = (state,type) =>{
//   switch(type){
//     case "increment":
//       return state+1;
//     case "decrement":
//       return state-1;
//     case "reset":
//       return 0;
//     default:
//       throw new Error();
//   }
// };

// const increment = () =>{
//   //console.log("inc");
//   return {type:"increment"};
// }

// const decrement = () =>{
//   //console.log("dec");
//   return {type:"decrement"};
// }

// const reset = () => {
//   //console.log("res");
//   return {type:"reset"};
// }

// const App = () => {
//   const [state,dispatch] = useReducer(reducer,0);
//   return (
//     <div>
//       Count : {state}
//       <button onClick={()=>{dispatch("increment")}}>+</button>
//       <button onClick={()=>{dispatch("decrement")}}>-</button>
//       <button onClick={()=>{dispatch("reset")}}>reset</button>
//     </div>
//   );
// }


const App = () => {
  const [fname,setFname]  = useState('');
  const [lname,setLname]  = useState('');
  const [email,setEmail]  = useState('');
  const [pass,setPass] = useState('');
  return(
    <div>
      <form class = "formval">
        <input class = "val1" type='text' value={fname} onChange={(e)=>setFname(e.target.value)} placeholder='Firstname'></input>
        <input class = "val2" type='text' value={lname} required onChange={(e)=>setLname(e.target.value)} placeholder='Lastname'></input>
        <input class = "val3" type='mail' value={email} required onChange={(e)=>setEmail(e.target.value)} placeholder='Mail'></input>
        <input class = "val4" type='password' value={pass} required onChange={(e)=>setPass(e.target.value)} placeholder='Password'></input>    
        <button class = "val5" type='submit' onClick={()=>{alert("FIRST NAME " + fname +
                                                   "\nLAST NAME " + lname +
                                                   "\nEMAIL " + email +
                                                   "\nPASSWORD " +pass);}}>SUBMIT</button>    
      </form>      
    </div>
  );
}
export default App;