import React, { useState } from "react";
import Square from '../Square/Square';
import ModalWinner from '../Modal/Modal';
import HaveWinner from '../HaveWinner/HaveWinner';
import findThreeEqualNumbers from '../../helper/helper';
import { FiRotateCcw } from "react-icons/fi";
import './GameBoardStyle.css';

function GameBoard() {
    const TURNS = {
        X: 'X',
        O: 'O',
    };
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(TURNS.X);
    const [winner, setWinner] = useState(null);
    const [game, setGame] = useState({ X: [], O: [] });
    const [openModal, setOpenModal] = useState(true);

    const updateBoard = (index) => {
        if (board[index] || winner) return;
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
        setGame({ X: [], O: [] });
        setOpenModal(true);
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
                <ModalWinner isVisible={openModal} onClickClose={() => { setOpenModal(false); refresh() }}>
                    <HaveWinner isWinner={winner} />
                </ModalWinner>
            }
        </div>
    );
};


export default GameBoard;