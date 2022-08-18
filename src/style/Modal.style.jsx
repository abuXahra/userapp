import styled from "styled-components";

export const ModalStyled = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center; 
`

export const OverlayStyled = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(49, 49, 49, 0.8);
    z-index: 10;
  
`

export const ModalContent = styled.div`
      width: 40%;
      background-color:white;
      display: flex;
      flex-direction: column;
      border-radius: 8px;
      height: auto;
      border: none;
      position: fixed;
      z-index: 100;
`

export const ModalTitle = styled.div`
    width: 100%;
    padding: 15px;
    background-color:#320432f0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    color: white;
`

export const ModalBody = styled.div`
    width: 100%;
    margin: 20px 10px 30px 10px;
`

export const ModalButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 10px;
    padding-right: 10px;
`