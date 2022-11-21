import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh; 
    background: linear-gradient(-45deg,#a0449f,#282ba4,#c356a0,#2a004f);
    background-size: 400% 400%;
	animation: gradient 15s ease infinite;
    display: flex;
    justify-content: center;
    align-items: center;

    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
    

`

export const Content = styled.div`
    width: 50%;
    background-color: transparent;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column ;
    justify-content: space-between;
    align-items: center;
`