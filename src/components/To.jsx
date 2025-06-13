import React from 'react';
function To({todos,deleteHandler}){
    return (
        <>
        <ol>
        {todos.map((todo,idx)=>
        <li key={idx}>
            <span>{todo}</span>
            <button onClick={()=>deleteHandler(idx)}>delete</button>
        </li>
        

        )}

        </ol>
        
        </>
    )
}
export default To;