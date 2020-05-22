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
	  border: "2px solid red",
  	  margin : "10px",
      padding: "50px",
  	  textalign: "center",
  	  bordertopleftradius: "0px",
	},
	mbr :{
	  border: "2px solid green",
  	  margin : "10px",
      padding: "50px",
  	  textalign: "center",
  	  bordertopleftradius: "16px",
	},
	lbr :{
	  border: "2px solid blue",
  	  margin : "10px",
      padding: "50px",
  	  textalign: "center",
  	  bordertopleftradius: "32px",
	},
	xlbr :{
	  border: "2px solid purple",
  	  margin : "10px",
      padding: "50px",
  	  textalign: "center",
  	  bordertopleftradius: "50px",
	}
}

export const Bottomleftborder = {
	sbr :{
	  border: "2px solid red",
  	  margin : "10px",
      padding: "50px",
  	  textalign: "center",
  	  borderbottomleftradius: "0px",
	},
	mbr :{
	  border: "2px solid green",
  	  margin : "10px",
      padding: "50px",
  	  textalign: "center",
  	  borderbottomleftradius: "16px",
	},
	lbr :{
	  border: "2px solid blue",
  	  margin : "10px",
      padding: "50px",
  	  textalign: "center",
  	  borderbottomleftradius: "32px",
	},
	xlbr :{
	  border: "2px solid purple",
  	  margin : "10px",
      padding: "50px",
  	  textalign: "center",
  	  borderbottomleftradius: "50px",
	}
}
export const Toprightborder = {
	sbr :{
	  border: "2px solid red",
  	  margin : "10px",
      padding: "50px",
  	  textalign: "center",
  	  bordertoprightradius: "0px",
	},
	mbr :{
	  border: "2px solid green",
  	  margin : "10px",
      padding: "50px",
  	  textalign: "center",
  	  bordertoprightradius: "16px",
	},
	lbr :{
	  border: "2px solid blue",
  	  margin : "10px",
      padding: "50px",
  	  textalign: "center",
  	  bordertoprightradius: "32px",
	},
	xlbr :{
	  border: "2px solid purple",
  	  margin : "10px",
      padding: "50px",
  	  textalign: "center",
  	  bordertoprightradius: "50px",
	}
}

export const Bottomrightborder = {
	sbr :{
	  border: "2px solid red",
  	  margin : "10px",
      padding: "50px",
  	  textalign: "center",
  	  borderbottomrightradius: "0px",
	},
	mbr :{
	  border: "2px solid green",
  	  margin : "10px",
      padding: "50px",
  	  textalign: "center",
  	  borderbottomrightradius: "16px",
	},
	lbr :{
	  border: "2px solid blue",
  	  margin : "10px",
      padding: "50px",
  	  textalign: "center",
  	  borderbottomrightradius: "32px",
	},
	xlbr :{
	  border: "2px solid purple",
  	  margin : "10px",
      padding: "50px",
  	  textalign: "center",
  	  borderbottomrightradius: "50px",
	}
}
export const ThemeContext = React.createContext(themes.dark);
export const FontContext = React.createContext(fonts.small);
export const TopLeftBorderContext = React.createContext(Topleftborder.sbr);
export const BottomLeftBorderContext = React.createContext(Bottomleftborder.sbr);
export const TopRightBorderContext = React.createContext(Toprightborder.sbr);
export const BottomRightBorderContext = React.createContext(Bottomrightborder.sbr);


