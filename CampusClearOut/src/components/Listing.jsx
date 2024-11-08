import React from "react";
//this is meant to represent a listing 
import '../App.css';

function Listing(props){

    return(
        <div className="listing">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <p>{props.price}</p>
        </div>
    );

}

export default Listing;