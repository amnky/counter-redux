import { useSelector,useDispatch } from "react-redux"
import { increament,decreament,reset,addbyamount } from "./counterSlice";
import { useState } from "react";
const Counter = () => {
    const dispatch=useDispatch();
    const count=useSelector((state)=>state.counter.counter);
    const [add,setAdd]=useState(0);
    const handleAdd=(e)=>{
      e.preventDefault();
      dispatch(addbyamount(parseInt(add)));
    }
    const addbyvalue=(e)=>{
      e.preventDefault();
      setAdd(e.target.value)
    }
  return (
    <div>
      <h1>{count}</h1>
        <button onClick={()=>dispatch(increament())}>+</button>
        <button onClick={()=>dispatch(decreament())}>-</button>
        <form onSubmit={handleAdd}>
          <input
           type="number"
           value={add}
           onChange={addbyvalue}
          />
        </form>
        
    </div>
  )
}

export default Counter;