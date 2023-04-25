import React from "react";
import gif from './win.gif';
import './haveWinnerStyle.css';

const HaveWinner = ({isWinner}) => {
    return (
        <div className="conteinerHaveWinner">
            <img src={gif}/>
            <h1>Winner is {isWinner}</h1>
        </div>
    );
};

export default HaveWinner;