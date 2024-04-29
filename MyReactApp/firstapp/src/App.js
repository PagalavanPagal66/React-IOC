import { useEffect, useState ,useReducer } from 'react';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

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

// const App = () => {
//   const [fname,setFname]  = useState('');
//   const [lname,setLname]  = useState('');
//   const [email,setEmail]  = useState('');
//   const [pass,setPass] = useState('');
//   var name = "thilak";
//   return(
//     <>
//       <div class = "formval">
//         <input class = "val1" type='text' onChange={(e)=>setFname(e.target.value)} placeholder='Firstname'></input>
//         <div class = "div1">{fname}</div>
//         <input class = "val2" type='text' required onChange={(e)=>setLname(e.target.value)} placeholder='Lastname'></input>
//         <div class = "div2" >{lname}</div>
//         <input class = "val3" type='mail' required onChange={(e)=>setEmail(e.target.value)} placeholder='Mail'></input>
//         <div class = "div3" >{email}</div>
//         <input class = "val4" type='password'  required onChange={(e)=>setPass(e.target.value)} placeholder='Password'></input>    
//         <div class ="div4" >{pass}</div>
//         <button class = "val5" onClick={
//             ()=>{console.log("FIRST NAME " + fname +
//                                                    "\nLAST NAME " + lname +
//                                                    "\nEMAIL " + email +
//                                                    "\nPASSWORD " +pass); }
//         }>SUBMIT</button>    
//       </div>      
//     </>
//   );
// }

// const App = () =>{
//   return (
//     <React.Fragment>
//       <h1>H1</h1>
//       h1  
//       <h2>H2</h2>
//       <h3>H3</h3>
//       <h4>H4</h4>
//       <h5>H5</h5>
//     </React.Fragment>
//   );
// }
// export default App;


//Class - comp---------------------------------------------------------------------------------------------------
// class Tablecreation extends React.Component{
//   render(){
//     return(
//     <>
//       <table>

//         <tr>
//           <th>NAME</th>
//           <th>AGE</th>
//           <th>GENDER</th>
//         </tr>

//         <tr>
//           <td>AAA</td>
//           <td>11</td>
//           <td>Male</td>
//         </tr>

//         <tr>
//           <td>BBB</td>
//           <td>22</td>
//           <td>Female</td>
//         </tr>

//       </table>
//     </>
//     );
//   }
// }

// export default Tablecreation;


//Class - comp---------------------------------------------------------------------------------------------------

// const App = () => {
//   const newlist = [1,2,3,"hi","hello"] 
//   const rl = newlist.map( (listvalues) => {return <li>{listvalues}</li>});
//   return 
// }


// const App = () =>{
//   const list=[1,2,3,"hi"]
//     const rl=list.map((values)=>{
//         return <li>{values + "*********" + list}</li>
//     }) ;
//   return (
//     <>{rl}</>
//   );
// }


//-----------------------------------------------------------Props & map-----------------------------------------------



// const App = () =>{
//   const myvalue = [4,5,6];
//   return (
//     <Func myvalue = {myvalue} ></Func>
//   );
// }

// import { Routes, Route, Link } from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';

// function App() {
//     return (
//     <>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         <Routes>
//          <Route path="/" element={<Home/>} />
//          <Route path="/about" element={<About/>} />
//        </Routes>
//     </>
//   );
// }

// export default App;

//---------------------------------- Images -----------------------------------------

import Virat from './Assets/Virat.jpeg'

const Func = (props) => {
  const val = props.myvalue;
  console.log(val);
  const rl = val.map((listvalue) => {
    return <li>{listvalue}</li>
  });
  return <ul>{rl}</ul>    
}

const Run_creator = (props) =>{
  const runs = props.runs;
  const sr_rate = props.sr_rate;
  const avg = props.avg;
  const run = runs.map((run)=>{
    return (<tr>{run}</tr>);
  })
  console.log(runs);
  return <td>{run}</td>;
}

const Sr_creator = (props) =>{
  const sr_rate = props.sr_rate;
  const sr = sr_rate.map((srate)=>{
    return (<tr>{srate}</tr>);
  })
  return <td>{sr}</td>;
}

const Avg_creator = (props) =>{
  const avg = props.avg;
  const avgs = avg.map((average)=>{
    return (<tr>{average}</tr>);
  })
  return <td>{avgs}</td>;
}

const Para = (props) =>{
  const para = props.text;
  return <p>{para}</p>;
}


const App = () =>{

  const runs = [973, 505, 359, 634, 364]
  const sr_rate = [152, 130, 122, 138, 111]
  const avg = [81, 45 , 27,  45, 28]
  const text = "Hi... Hello how are you...!"
  const myvalue = ["Name" , "Age" ,"gender" ,"address"] 
  return(
    
    <>
      <img src={Virat}></img>
      <table class = "table">
        <th>Runs</th>
        <th>Average</th>
        <th>Strike Rate</th>
        <tr>
          <Run_creator runs = {runs}></Run_creator>
          <Avg_creator avg = {avg}></Avg_creator>
          <Sr_creator sr_rate = {sr_rate}></Sr_creator>
        </tr>
      </table>
      <Para text = {text}></Para>
      <Func myvalue = {myvalue}></Func>
    </>
  );
}

export default App;