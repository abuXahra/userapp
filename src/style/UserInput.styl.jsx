import styled from "styled-components";

export const FormControl = styled.div`
   display: flex;
   flex-direction: column;
   background-color: white;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 20px;
`


export const FormInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;

    label{
        font-weight: bold;
        margin-bottom: 5px;
    }

    input{
        border: 1px solid #cccccc;
      
        :focus{
            outline: 1px solid #320432f0;
        }
    }
`

export const FormButton = styled.div`
    button{
        background-color: #320432f0;
        color:white;
        border: none;
        padding: 5px 20px;
}
`