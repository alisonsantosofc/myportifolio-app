import { darken, lighten } from "polished";

export const lightTheme = {
  colors: {
    // variables
    main300: '#b8986a',
    main500: '#836c4b',
    second: '#2165c5',
    title: '#191a1c',
    titleContrast: '#d6dbe5',
    text: '#303336',
    textContrast: '#dfe4ef',

    // backgrounds
    bodyBg: '#d8dfee',
    containerBg: '#e3eaf8',
    fadeBg: 'rgba(30, 30, 30, 0.3)',

    // colors
    white: '#fff',
    black: '#080808',
    green500: '#10955F',
    yellow500: '#f0cd20',
    orange500: '#ffa323',
    red500: '#e52e4d',
    blue500: '#3089e9',
    gray300: '#959cad',
    gray500: '#7a808e',
    gray700: '#3a3e48',
  },
  effects: {
    // shadows
    shadowTop: '0 -1px 4px rgba(0, 0, 0, 0.15)',
    shadowAround: '0px 0px 2px 2px rgba(0, 0, 0, 0.15)',

    // hover elements
    hoverLight: (color: string) => {
      return lighten(0.1, color)
    },
    hoverDark: (color: string) => {
      return darken(0.1, color)
    },
  },
  text: {
    size: {
      smaller: '0.8rem',
      small: '0.9rem',
      normal: '1rem',
      middle: '1.1rem',
      medium: '1.2rem',
      header: '1.5rem',
      title: '2.25rem',
      big: '3rem',
    },
    weight: {
      normal: 400,
      middle: 500,
      medium: 600,
      max: 700,
    }
  }
};

export const darkTheme = {
  colors: {
    // variables
    main300: '#d0aa76',
    main500: '#ae8f64',
    second: '#4b95fd',
    title: '#e6ebf6',
    titleContrast: '#191a1c',
    text: '#cdd2df',
    textContrast: '#212325',

    // backgrounds
    bodyBg: '#131416',
    containerBg: '#26282b',
    fadeBg: 'rgba(10, 10, 10, 0.4)',

    // colors
    white: '#e8ecf8',
    black: '#080808',
    green500: '#49b087',
    yellow500: '#f2c318',
    orange500: '#f69438',
    red500: '#f15757',
    blue500: '#508eec',
    gray300: '#959cad',
    gray500: '#7a808e',
    gray700: '#3a3e48',
  },
  effects: {
    // shadows
    shadowTop: '0 -1px 4px rgba(60, 60, 60, 0.15)',
    shadowAround: '0px 0px 2px 2px rgba(60, 60, 60, 0.15)',

    // hover elements
    hoverLight: (color: string) => {
      return lighten(0.1, color)
    },
    hoverDark: (color: string) => {
      return darken(0.1, color)
    },
  },
  text: {
    // font size
    size: {
      smaller: '0.8rem',
      small: '0.9rem',
      normal: '1rem',
      middle: '1.1rem',
      medium: '1.2rem',
      header: '1.5rem',
      title: '2.25rem',
      big: '3rem',
    },
    // font weight
    weight: {
      normal: 400,
      middle: 500,
      medium: 600,
      max: 700,
    }
  }
};
