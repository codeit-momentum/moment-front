import { createGlobalStyle } from 'styled-components';
import NeoDunggeunmoProRegular from '../assets/fonts/NeoDunggeunmoPro-Regular.woff2';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  @font-face {
    font-family: 'NeoDunggeunmoPro-Regular';
    src: url(${NeoDunggeunmoProRegular}) format('woff2');
    font-style: normal;
  }

  * {
    box-sizing: border-box;
    letter-spacing: -0.32px;
  }

  body { 
    font-family: 'NeoDunggeunmoPro-Regular', sans-serif;
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
    font-family: 'NeoDunggeunmoPro-Regular', sans-serif;
  }

  input {
    outline: none;
  }

  :root {
  --vh: 100%;
  }

  html{
    padding: 3rem 2rem 9rem 2rem;
    background-color: ${({ theme }) => theme.colors.black};
  }
  #root{
    font-family: NeoDunggeunmoPro-Regular;
  }
  #root, body, html {
    scrollbar-width: none; /* 파이어폭스 스크롤바 숨김 */
    margin: 0 auto;
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
