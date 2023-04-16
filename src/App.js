import { useState } from 'react';
import './App.css';
import { FiRotateCcw } from "react-icons/fi"

const TURNS = {
  X : 'X',
  O : 'O',
};
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

function App() {
  const [ board, setBoard ] = useState( Array(9).fill(null));
  const [ turn, setTurn ] = useState(TURNS.X);
  const [ winner, setWinners ] = useState(null);
  
  const updateBoard = (index) => {

    if(board[index] || winner) return;
    
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
   }
  return (
    <div className="App">
      <h1>TA TE TI</h1>
      <div className='conteinerBoard'>
        <section className='board'>
          {
            board.map(( value,index)=> {
              return (
                <Square 
                  key={index}
                  index={index}
                  updateBoard = { updateBoard}>
                    {board[index]}
                  </Square>
              )
            }) 
          }
        </section>
      </div>
      <div className='foot'>
        <section className='turn'>
          <h1>TURN</h1>
          {turn}
        </section>
        <section onClick={()=>setBoard(Array(9).fill(null))}>
            <FiRotateCcw size={45} color='#bebebe'/>
        </section>
      </div>
    </div>
  );
};

export default App;
