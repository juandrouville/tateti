import React from "react";
import './squareStyle.css';

const Square = ({children,updateBoard,index})=>{
    const handleClick = () => {
        updateBoard(index);
    }
    return (
        <div className='square' onClick={handleClick}>
        {children}
        </div>
    );
};

export default Square;