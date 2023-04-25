import React from "react";
import ReactDOM from "react-dom";
import './modalStyle.css';

const Portal = document.getElementById('modal');

function Modal(props) {
    const { isVisible, onClickClose, children } = props;
    if (!isVisible) { return null };
    return ReactDOM.createPortal(
        <div className="transparent" onClick={onClickClose}>
            <div className="modalVisible">
                <div className="conteinerChildren">
                    {children}
                </div>
            </div>
        </div>
    , Portal);
};

export default Modal;