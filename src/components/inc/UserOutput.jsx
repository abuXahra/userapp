import React from 'react'
import { OutputStyled } from '../../style/UserOutput.style'
import UserItem from './UserItem'

function UserOutput(props) {
    return (
        <OutputStyled>
            {
                props.userData.length === 0 ? (<p>No Item</p>) : (
                    props.userData.map((data) => (
                        <UserItem
                            key={data.id}
                            id={data.id}
                            name={data.name}
                            age={data.age}
                            deleteHandler={props.deleteHandler}
                        />
                    ))

                )
            }
        </OutputStyled>
    )
}

export default UserOutput