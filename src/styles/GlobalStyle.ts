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
`;

export default GlobalStyle;
