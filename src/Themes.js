import React from "react";

export const themes = {
  light: {
    color : 'black',
    background: 'white',
  },
  dark: {
    color: 'white',
    background: 'black',
  },
};

export const font = {
	small: {
		fontSize : 'small'
	},	
	medium: {
		fontSize : 'medium'
	},
	large: {
		fontSize : 'large'
	}
}
export const FontContext = React.createContext(font.small);
export const ThemeContext = React.createContext(themes.dark);



