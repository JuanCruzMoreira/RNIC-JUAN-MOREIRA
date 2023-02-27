import 'styled-components/native';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: typeof myTheme.colors;
  }
}

const myTheme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    gray: '#afafaf',
    lightgray: '#dddddd',
    primary: '#d3fffe',
    secondary: '#247574',
    success: '#12e068',
    error: '#cb0707',
  },
};

export {myTheme};
