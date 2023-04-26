import React from "react";
import './haveTieStyle.css';
import gif from './tie.gif';

function HaveTie (){
    return (
        <div className="conteinerTie">
            <img src={gif}/>
            <h1>Empate!</h1>
        </div>
    );
};

export default HaveTie;