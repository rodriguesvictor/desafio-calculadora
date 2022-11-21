import styled from "styled-components";
import { device } from '../../device';

export const InpuntContainer = styled.div`
    width: 100%;
    height: 75px;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    font-size: 24px;
    font-family: 'Roboto';
    border-radius: 22px;
    margin-bottom: 30px;

    input {
        width: 100%;
        height: 75px;
        background-color: #cc99fae3;
        border: none;

        font-size: 24px;
        font-weight: 400;

        text-align: right;

        padding: 0 152px;

        color: #fff;

        border-radius: 22px;

        box-shadow: 0 0 30px rgba(0,0,0,.38);

        @media only screen and ${device.laptopL}{
            padding: 0 80px;
        }

        @media only screen and ${device.laptop}{
            padding: 0;
            text-align: center;
        }

    }
`

