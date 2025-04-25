import React,{useState} from "react";
function Cars({car}){
    return (
        <>
        <div className="card">
           <img src={car.image} className="card-img-top"></img>
            <div className="card-body">
                <h4>{car.cName}</h4>
                <p>{car.desc}</p>
                <h5>{car.price}</h5>

            </div>
        </div>
        </>
    )
}
export default Cars;