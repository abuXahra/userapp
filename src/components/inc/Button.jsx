import React from 'react'
import { ButtonStyled } from '../../style/Button.style'

function Button(props) {
    return <ButtonStyled onClick={props.clickHandler} type={props.type} >{props.text}</ButtonStyled>
}

export default Button
