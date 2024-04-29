import './Practice.css';

const Func = (props) => {
  const val = props.myvalue;
  console.log(val);
  const rl = val.map((listvalue) => {
    return <li>{listvalue}</li>
  });
  return <ul>{rl}</ul>    
}

const Para = (props) =>{
  const para = props.text;
  return <p>{para}</p>;
}

const Practice = () => {
    const text = "Hi... Hello how are you...!"
    const myvalue = ["Name" , "Age" ,"gender" ,"address"] 
    return (
        <div class="content">
            <Para text = {text}></Para>
            <Func myvalue = {myvalue}></Func>
        </div>
    );
}

export default Practice;