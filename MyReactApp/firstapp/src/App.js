import './App.css';

function App(props) {
  return (
    <div className="App">
      <Person name = {"pagal"} age = {20} gender = {"Male"}/>
      <Person name = {"sri arun"} age = {27} gender = {"Male"}/>
      <p>{props.cycle}</p>
    </div>
  );
}

const Person = (props) =>{
  return (
    <>
      <p>Name - {props.name} , Age - {props.age} , Gender - {props.gender}</p>
      {/* <App cycle = "true"></App> */}
    </>
  );
}

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


export default App;