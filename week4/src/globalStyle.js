import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'EarlyFontDiary';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/EarlyFontDiary.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    #root, body, html {
        padding: 0;
        margin: 0;

        font-family: 'EarlyFontDiary'
    }

    * {
        box-sizing: border-box;
	}

    button:hover {
        cursor: pointer;
    }

    ${reset}

    * {
        box-sizing: border-box;
	}

    button:hover {
        cursor: pointer;
    }
`;

export default GlobalStyle;