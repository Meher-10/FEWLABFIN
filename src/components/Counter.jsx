import React,{useState} from 'react';
function Counter(){
    const [count,setCount]=useState(0);
    function Increment(){
        setCount(count+1);
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={Increment}>inc</button>
        </>
    )

}
export default Counter;