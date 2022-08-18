import React from 'react'
import { ModalStyled, ModalContent, ModalTitle, ModalBody, ModalButton, OverlayStyled } from '../../style/Modal.style'
import Button from './Button'


// const Backdrop = props => {
//     return <div className={classes.backdrop} onClick={props.onConfirm}></div>
// }

function Modal(props) {
    return (
        <ModalStyled>
            {/* Modal Overlay */}
            <OverlayStyled onClick={props.modalFunc}></OverlayStyled>
            <ModalContent>
                {/* Modal Header */}
                <ModalTitle>
                    <h2>{props.modalTitle}</h2>
                </ModalTitle>
                {/* Modal body */}
                <ModalBody>
                    {props.modalBody}
                </ModalBody>
                {/* Modal button */}
                <ModalButton>
                    <span onClick={props.modalFunc}>
                        <Button type="button" text='Okay' />
                    </span>
                </ModalButton>
            </ModalContent>
        </ModalStyled>
    )
}

export default Modal