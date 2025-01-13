import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    box-sizing: border-box;
  }

  body {
    font-family: apple-system, sans-serif;
  }
  ol, ul {
    list-style: none;
  }

  a{
	text-decoration: none;
	color: inherit;
	&:hover {
    	text-decoration: none;
		color: none;
	}
    
	&:active {
    	text-decoration: none;
		color: black;
	}
        
    &:visited {
    	text-decoration: none;
		color: black;
	}
        
	&:link {
    	text-decoration: none;
		color: black; 
	}
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }

  input {
    outline: none;
  }

  :root {
  --vh: 100%;
  }

  #root, body, html {
    scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */
    margin: 0 auto;
    padding:0;
    font-size: 62.5%;
    -ms-overflow-style: none; /* 인터넷 익스플로러  스크롤바 숨김 */
    scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */

    /* 버튼 클릭 시 색 제거 */
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  #root::-webkit-scrollbar {
    display: none; /* 크롬, 사파리, 오페라, 엣지 스크롤바 숨김 */
  }
`;

export default GlobalStyle;
