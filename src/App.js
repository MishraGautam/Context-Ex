import React, {Component} from 'react';
import {ThemeContext, themes, FontContext, font} from './Themes'
import ThemedButton from './ThemedButton';
import Main from './Main'


class App extends Component{
   
    constructor(props) {
        super(props);
         this.state = {
         theme: themes.light,
    };
    }

    toggleTheme = () => {
      this.setState(state => ({ theme: state.theme === themes.dark ? themes.light : themes.dark }));
    };

    render() {
      const font = "small";
        return (
          <div>
            <ThemeContext.Provider value = {this.state.theme}>
            <FontContext.Provider value = {font}>
            <ThemedButton onClick={this.toggleTheme}></ThemedButton>
            <Main/>
            </FontContext.Provider>
            </ThemeContext.Provider> 
            </div>    
        );
    }
}

export default App;
