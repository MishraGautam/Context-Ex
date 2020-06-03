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


export const fonts = {
	small: {
		fontSize : '10px'
	},	
	medium: {
		fontSize : '20px'
	},
	large: {
		fontSize : '30px',

	}
}


export const Topleftborder = {
	sbr :{
	  bordertopleftradius: "0px"
	},
	mbr :{
  	  bordertopleftradius: "16px"
	},
	lbr :{
  	  bordertopleftradius: "32px"
	},
	xlbr :{
  	  bordertopleftradius: "50px"
	}
}

export const Bottomleftborder = {
	sbr :{
	  borderbottomleftradius: "0px"
	},
	mbr :{
  	  borderbottomleftradius: "16px"
	},
	lbr :{
  	  borderbottomleftradius: "32px"
	},
	xlbr :{
  	  borderbottomleftradius: "50px"
	}
}
export const Toprightborder = {
	sbr :{
	  bordertoprightradius: "0px"
	},
	mbr :{
  	  bordertoprightradius: "16px"
	},
	lbr :{
  	  bordertoprightradius: "32px"
	},
	xlbr :{
  	  bordertoprightradius: "50px"
	}
}

export const Bottomrightborder = {
	sbr :{
	  borderbottomrightradius: "0px"
	},
	mbr :{
  	  borderbottomrightradius: "16px"
	},
	lbr :{
  	  borderbottomrightradius: "32px"
	},
	xlbr :{
  	  borderbottomrightradius: "50px"
	}
}

export const ThemeContext = React.createContext(themes.dark);
export const FontContext = React.createContext(fonts.small);
export const TopLeftBorderContext = React.createContext(Topleftborder.sbr);
export const BottomLeftBorderContext = React.createContext(Bottomleftborder.sbr);
export const TopRightBorderContext = React.createContext(Toprightborder.sbr);
export const BottomRightBorderContext = React.createContext(Bottomrightborder.sbr);


