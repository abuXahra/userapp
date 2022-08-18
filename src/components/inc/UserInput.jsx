import React, { useState, useRef } from 'react'
import { FormControl, FormInput, FormButton } from '../../style/UserInput.styl'
import Button from './Button';
import Modal from './Modal';




function UserInput(props) {

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredName, setenteredName] = useState("");
    // const [enteredAge, setenteredAge] = useState("");

    // for modal
    const [modal, setmodal] = useState(false)
    const [secondModal, setsecondModal] = useState(false)

    const toggleModal = () => {
        setmodal(!modal);
    }

    const secondToggleModal = () => {
        setsecondModal(!secondModal);
    }

    // const nameChangeHandler = (e) => {
    //     setenteredName(e.target.value);
    // }

    // const ageChangeHandler = (e) => {
    //     setenteredAge(e.target.value);
    // }


    const formSubmit = (e) => {
        e.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            return toggleModal();
        }
        if (+enteredAge < 1) {
            return secondToggleModal();
        }

        const newUserInput = {
            id: Math.random().toString(),
            name: enteredName,
            age: enteredAge
        }


        props.newUserHandler(newUserInput);

        // reset inputs
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
    }

    return (
        <form onSubmit={formSubmit}>
            <FormControl>
                {
                    modal && <Modal
                        modalTitle="Invalid Input"
                        modalBody="Please enter a valid name and age (non-empty values)"
                        modalFunc={toggleModal}
                    />
                }
                {
                    secondModal && <Modal
                        modalTitle="Invalid Input"
                        modalBody="Please enter a valid age (> 0)"
                        modalFunc={secondToggleModal}
                    />
                }
                <FormInput>
                    <label>Username </label>
                    <input ref={nameInputRef} type="text" />
                </FormInput>
                <FormInput>
                    <label>Age (Year) </label>
                    <input ref={ageInputRef} type="number" />
                </FormInput>
                <div>
                    <Button type='submit' text='Add User' />
                </div>
            </FormControl>
        </form>
    )
}

export default UserInput
