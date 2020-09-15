import styled, { createGlobalStyle } from 'styled-components'
import BGImage from './img/africa.jpg'

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-image : url(${BGImage});
        background-size: cover;
        margin:0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }
    * {
        box-sizing : border-box;
        font-family : sans-serif;
    }
    `

export const Wrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items: center;

    > p {
        color: #fff;
        font-size : 1rem;
    }

    .score {
        color:#fff;
        font-size : 2rem;
        margin:0;
    }
    > h1 {
        background-size: 100%;
        font-size: 3rem;
        text-align: center;
        margin:20px;
    }

    .start, .next {
        cursor:pointer;
        font-size: 1rem;
        background: linear-gradient(180deg, #fff, #ffcc91);
        border: 6px solid #d38558;
        box-shadow: 0px 5px 10px rgba(0,0,0,0,0.25);
        margin: 10px 0;
        padding: 5px 20px;
    }
    `