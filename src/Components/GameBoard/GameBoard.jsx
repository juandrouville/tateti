import React, { useState } from "react";
import Square from '../Square/Square';
import Modal from '../Modal/Modal';
import HaveWinner from '../HaveWinner/HaveWinner';
import findThreeEqualNumbers from '../../helper/helper';
import { FiRotateCcw } from "react-icons/fi";
import './GameBoardStyle.css';
import HaveTie from "../HaveTie/HaveTie";

function GameBoard() {
    const TURNS = {
        X: 'X',
        O: 'O',
    };
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(TURNS.X);
    const [winner, setWinner] = useState(null);
    const [tie, setTie] = useState(null);
    const [game, setGame] = useState({ X: [], O: [] });
    const [openModal, setOpenModal] = useState(true);

    const checkEndGame = (newGame)=>{
        return newGame.every((position)=>position !== null);
    };

    const updateBoard = (index) => {
        const newBoard = [...board];
        if (newBoard[index] || winner) return;
        newBoard[index] = turn;
        setBoard(newBoard);
        const gameActual = game;
        gameActual[turn].push(index);
        setGame(gameActual);
        findThreeEqualNumbers(gameActual[turn]) && setWinner(turn);
        if(checkEndGame(newBoard)){return setTie(true) && setOpenModal(true)}
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn(newTurn);
    };

    const refresh = () => {
        setWinner(null);
        setBoard(Array(9).fill(null));
        setGame({ X: [], O: [] });
        setOpenModal(true);
        setTie(null);
    };
    return (
        <div className='conteinerBoard'>
            <section className='board'>
                {
                    board.map((value, index) => {
                        return (
                            <Square key={index} index={index} updateBoard={updateBoard}>
                                {board[index]}
                            </Square>
                        )
                    })
                }
            </section>
            <div className='foot'>
                <section className='turn'>
                    <h1>TURN</h1>
                    {turn}
                </section>
                <section onClick={refresh}>
                    <FiRotateCcw size={45} color='#bebebe' />
                </section>
            </div>
            {winner &&
                <Modal isVisible={openModal} onClickClose={() => { setOpenModal(false); refresh() }}>
                    <HaveWinner isWinner={winner} />
                </Modal>
            }
            {tie && 
                <Modal isVisible={openModal} onClickClose={() => { setOpenModal(false); refresh() }}>
                    <HaveTie/>
                </Modal>
            }
        </div>
    );
};


export default GameBoard;