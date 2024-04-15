import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//        <p>Hello</p>
//       </header>
//     </div>
//   );
// }

const Arun = () =>{
  return (
    <p>Arun</p>
  );
}

const Sri = () =>{
  return (
    <>
      <p>Sri</p>
      <Arun/>
    </>
  );
}

const Caller = () =>{
  return (
    <>
    <h1>H1 TAG</h1>
    <Sri/>
    <h2>H2 TAG</h2>
    This is the fragment
    </>
  );
}

export default function App(){
  return (
    <>
      {Caller()}
    </>
  );
}