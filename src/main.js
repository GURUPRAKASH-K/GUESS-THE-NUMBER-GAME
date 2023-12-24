import React from 'react'
import './main.css';
import { useState } from 'react';

export default function Main() {
    const [minval,setminval]=useState(0);
    const [maxval,setmaxval]=useState(10);
    const[ran,setran]=useState(5);
    const[guessval,setguessval]=useState(0);
    const[chance,setchance]=useState(5);
   const handle=()=>{
    if(minval>maxval){
      alert("please enter the minimul value less than maxval")
      
    }
    else{
    setran(Math.floor(Math.random()*(maxval-minval+1) +minval))
    setchance(5)
  }
   }
   const h1=()=>{
    if(guessval==ran){
      alert("you guess is right");
    }
    else if(chance<1){
      alert("you chance completed.The answer is "+ran);
      
    }
    else if(guessval>ran)
    {
      alert("your guess is greater than the number");
    }
    else {
      alert("your quess is less than the number");
    }
    setchance(chance-1);

   }

  return (
    <div className='hero'>
    <div className='container'>
    <div className='randomnum'>
    <h1>GUESS THE NUMBER</h1>
    <div className='numcontainer'>
    <div>
    <br></br>
    <p><b>Min</b></p>
    <input type='number' 
    value={minval}
     onChange={e=>setminval(+e.target.value)}>
     </input>
    </div>
    <div>
    <br></br>
    <p><b>Max</b></p>
    <input type='number'
    value={maxval}
    onChange={e=>setmaxval(+e.target.value)}></input>
    </div>
    </div>
    <br></br>
    <p><b>GUESS</b></p>
    <input type='number'
    value={guessval}
    onChange={e=>setguessval(e.target.value)}></input>
    <br></br>
    <button className='but' onClick={h1}><b>Guess</b></button>
    <br></br>
    <br></br><div>No. of chances:{chance}</div>
    <br></br>
    <button className='but' onClick={handle}><b>Get</b></button>
    
    </div>
    </div>
    </div>
  )
}
