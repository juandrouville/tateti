import { useState } from 'react';
import './App.css';
import { FiRotateCcw } from "react-icons/fi"
import ModalWinner from './Components/Modal/Modal';
import Square from './Components/Square/Square';
import HaveWinner from './Components/HaveWinner/HaveWinner';
import findThreeEqualNumbers from './helper/helper';

const TURNS = {
  X : 'X',
  O : 'O',
};

function App() {
  const [ board, setBoard ] = useState( Array(9).fill(null));
  const [ turn, setTurn ] = useState(TURNS.X);
  const [ winner, setWinner ] = useState(null);
  const [ game , setGame ] = useState({ X : [], O: [] });
  const [ openModal , setOpenModal] = useState(true);
  
  const updateBoard = (index) => {
    if(board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const gameActual = game;
    gameActual[turn].push(index);
    setGame(gameActual);
    findThreeEqualNumbers(gameActual[turn]) && setWinner(turn);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };

  const refresh = () => {
    setWinner(null);
    setBoard(Array(9).fill(null));
    setGame({
      X : [],
      O: [],
    });
    setOpenModal(true);
  };
  return (
    <div className="App">
      <h1>TA TE TI</h1>
      <div className='conteinerBoard'>
        { winner && 
          <ModalWinner isVisible={openModal} onClickClose={()=>{setOpenModal(false);refresh()}}>
            <HaveWinner isWinner={winner}/>
          </ModalWinner>
        }     
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
        <section onClick={refresh}>
            <FiRotateCcw size={45} color='#bebebe'/>
        </section>
      </div>
    </div>
  );
};

export default App;
    

    
    

