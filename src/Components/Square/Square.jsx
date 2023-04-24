import React from "react";

const Square = ({children,updateBoard,index})=>{
    const handleClick = () => {
        updateBoard(index);
    }
    return (
        <div className='cuadrado' onClick={handleClick}>
        {children}
        </div>
    );
};

export default Square;