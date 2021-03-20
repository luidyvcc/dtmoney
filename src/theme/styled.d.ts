import { } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;
    name: string;
    color: {
      danger: string;
      success: string;
      main: string;
      mainLight: string;
      textTitle: string;
      textBody: string;
      background: string;
      shape: string;
      input: {
        color: string;
        background: string;
        border:  string;
      }
    }
  };
}
