import styled from "styled-components";

export const TodoStyle = styled.section`

    width: 70%;
    color: white;
    background-color: #363636;
    height: 50px;
    border-radius: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .checkBtn{
        border-radius: 100%;
        border: 2px solid var(--primary);
        background-color: transparent;
        height: 25px;
        width: 25px;
    }

    .checkBtnActive{
        border-radius: 100%;
        height: 25px;
        width: 25px;
        background-color: var(--secondary);
    }

    .trashBtn{
        background-color: transparent;
    }

`