import React from 'react'
import ReactDOM from 'react-dom'

function Modal({ children, setToggleModal, setPlay }) {

    const onClose = (e) => {
        if (e.target.classList.contains("modal") || e.target.classList.contains("icon-close")) {
            document.body.classList.remove('no-scroll')
            setToggleModal(false)
            setPlay && setPlay(true)
        }
    }
    return (
        <div className='modal' onClick={onClose}>
            <div className='modal-content'>
                {children}
            </div>
        </div>
    )
}
export default function ModalPortal({ children, setToggleModal, setPlay }) {
    return ReactDOM.createPortal(<Modal setToggleModal={setToggleModal} setPlay={setPlay}>{children}</Modal>, document.getElementById('modal-root'))
}