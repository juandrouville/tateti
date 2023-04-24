import React from "react";
import ReactDOM from "react-dom";
import './modalStyle.css';

const Modal = document.getElementById('modal');

function ModalWinner(props) {
    const { isVisible, onClickClose, children } = props;
    if (!isVisible) { return null };
    return ReactDOM.createPortal(
        <div className="transparent" onClick={onClickClose}>
            <div className="modalVisible">
                <div className="conteinerChildren">
                    {children}
                </div>
                <button onClick={onClickClose}>Close</button>
            </div>
        </div>
        , Modal);
};

export default ModalWinner;