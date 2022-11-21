import styled, { css } from "styled-components";
import { device } from '../../device';


export const ButtonContainer = styled.button`
    padding: 20px;
    border: 1px solid rgba(255,255,255,.1);
    margin: 2px;
    background-color: #D989B5;
    color: #FFF;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    border-radius: 22px;
    box-shadow: 0 0 20px rgba(0,0,0,.38);

    @media(pointer: fine) {
        :hover {
            opacity: .6;
        }
    }

    &:active{
        background-color: transparent;
        border-color: transparent;
    }
    
    @media only screen and ${device.mobileL}{
        font-size: 22px;
        padding: 15px;
        border-radius: 16px;
    }

    @media only screen and ${device.mobileM}{
        font-size: 20px;
        padding: 13px;
        border-radius: 16px;

    }

    @media only screen and ${device.mobileS}{
        font-size: 16px;
        padding: 10px;
        border-radius: 12px;
    }



    ${({ variant }) => variant === "terc" && css`
        background-color: #FFADBC;
`}
`