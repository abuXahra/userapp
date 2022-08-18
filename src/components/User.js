import React, { useState } from 'react'
import { USERDATA } from '../data/UserData'
import { UserStyled } from '../style/User.style'
import UserInput from './inc/UserInput'
import UserOutput from './inc/UserOutput'

function User() {

    const [userData, setuserData] = useState(USERDATA)

    const newUserHandler = (item) => {
        setuserData((prevData) => {
            return [item, ...prevData]
        })
    }

    const deleteHandler = (id) => {
        setuserData((data) => data.filter((newdata) => newdata.id !== id))
    }

    return (
        <UserStyled>
            <UserInput newUserHandler={newUserHandler} />
            <UserOutput userData={userData} deleteHandler={deleteHandler} />
        </UserStyled>
    )
}

export default User