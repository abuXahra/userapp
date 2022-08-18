import styled from "styled-components";

export const UserItemStyled = styled.div`
      border: 1px solid #cccccc;
      padding:10px;
      width: 100%;
      display: flex;

       justify-content: space-between;
       margin: 5px 0;

       div:nth-child(2){
            span{
                  cursor: pointer;
                  color:  #320432f0;
                  margin: 0 0 0 10px;
            }

       }

       input{
                  border: none
            }
`