import React , {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment , decrement , inputInc} from "./JS/actions/action"

import './App.css';

function App() {
  //--------useState----------------------
  // const [count , setCount] =useState(0);

  // const inc = ()=>{
  //   setCount(count+1)
  // }

  //----------------React-Redux----------------------
  const [num , setNum] = useState(0)
  const count = useSelector((state)=>state.countReducer.count1)
  const dispatch = useDispatch();

  const dec = ()=>{
    dispatch(decrement())
  }

  const incInput = (e)=>{
    e.preventDefault()
    dispatch(inputInc(+num))
  }


  return (
    <div>
       {/* //--------useState---------------------- */}
      {/* <button onClick={inc}>+</button>
      <h3> {count} </h3>
      <button onClick={()=>setCount(count-1)}>-</button> */}


{/* //----------------React-Redux---------------------- */}
      <form>
       <input type="number" onChange={(e)=>setNum(e.target.value)} /><button onClick={incInput}>add</button> 

      </form>
      <button onClick={()=>dispatch(increment())}>+</button>
      <h3> {count} </h3>
      <button onClick={dec}>-</button> 
    </div>
  );
}

export default App;
