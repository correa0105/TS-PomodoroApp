import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #40cbee;
        position: relative; 
        min-height: 100vh;
        transition: background-color 300ms ease-in-out;
        font-family: 'Inter', sans-serif;
    }
    
    .app {
        max-width: 650px;
        margin: 0 auto;
    }

    .working {
        background-color: #ef5d50;
    }

    .hidden {
        display: none;
    }

`;
