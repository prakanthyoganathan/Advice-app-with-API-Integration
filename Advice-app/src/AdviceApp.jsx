import './Advice.css';
import { useState, useEffect } from 'react';


const AdviceApp = () => {

    const[advice, setAdvice]=useState('Please Click Buttton to Get Advice');
    const [count, setCount] = useState(0);

    async function getAdvice(){
       const res = await fetch('https://api.adviceslip.com/advice');
       console.log(res);
       const data =  await res.json();
    //    console.log(data);
         setAdvice(data.slip.advice);
         setCount((c)=>c+1);
    }

    

  return (
    <div>
        <h1>{advice}</h1>
        <button onClick={getAdvice} >Get Advice</button>
        <Counter count={count}/>
    </div>
  )
}

    function Counter(props){
      return(  <p>
            You have read <b>{props.count}</b> pieces of advice
        </p>);
    }

export default AdviceApp