import React from 'react'
import { UserItemStyled } from '../../style/UserItem.style'
import { AiOutlineDelete } from 'react-icons/ai'
import { BiEdit } from 'react-icons/bi'
import { FaTimes } from 'react-icons/fa'
import { GrFormCheckmark } from 'react-icons/gr'

function UserItem(props) {

    const deleteId = () => {
        props.deleteHandler(props.id)
    }


    const viewTemplate = (
        <UserItemStyled>
            <div><b>Name:</b> {props.name} <b>Age: </b>{props.age}</div>
            <div><span><BiEdit /></span> <span onClick={deleteId}><AiOutlineDelete /></span></div>
        </UserItemStyled>);

    const editTemplate = (
        <form action="">
            <UserItemStyled>
                <div><label htmlFor="">{props.name}</label> <input type="text" id={props.id} /></div>
                <div><span><GrFormCheckmark /></span> <span onClick={deleteId}><FaTimes /></span></div>
            </UserItemStyled>
        </form>

    )
    return (
        viewTemplate
    )
}

export default UserItem