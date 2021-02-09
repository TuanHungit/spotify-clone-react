import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    
    html, body {
         margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
        
    }
      ::-webkit-scrollbar {
    width: 10px;
   
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #b3b3b3; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #777; 
    
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555; 
}
   
`;
