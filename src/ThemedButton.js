import React from 'react'
import {ThemeContext} from './Themes';

class ThemedButton extends React.Component {
	static contextType = ThemeContext;
	  render() {
	    let props = this.props;
	    let theme = this.context;    
	    return (
	      <button {...props} style={{backgroundColor: theme.background, color : theme.color}}>Change Theme</button>
	    );
	  }
	}

export default ThemedButton;

