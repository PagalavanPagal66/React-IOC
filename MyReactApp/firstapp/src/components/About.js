import './About.css';
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

const About = () => {
    const runs = [973, 505, 359, 634, 364]
    const sr_rate = [152, 130, 122, 138, 111]
    const avg = [81, 45 , 27,  45, 28]
    return (
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
    );
}

export default About;