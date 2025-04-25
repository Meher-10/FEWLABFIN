import React,{useState} from 'react';
function May({may}){
    return(
        <>
        
        <div className="card">
            <img src={may.image}alt="laa" className='card-img-top'/>
            <div className='card-body'>
                <h1>{may.name}</h1>
                <h1>{may.place}</h1>
            </div>
        </div>

        </>
    )

}
export default May;