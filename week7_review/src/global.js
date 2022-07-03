import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

${reset}

@font-face {
    font-family: 'GangwonEdu_OTFBoldA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEdu_OTFBoldA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Unilab';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2205-2@1.0/Unilab.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'SUIT-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

  #root, body, html {
    padding: 0;
    margin: 0;
  }

  body, * {
    box-sizing: border-box;
    font-family: 'GangwonEdu_OTFBoldA';
	}

  button:hover {
    cursor: pointer;
  }
`;

export default GlobalStyle;
