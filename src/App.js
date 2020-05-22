import React, {Component} from 'react';
import {ThemeContext, themes, FontContext, fonts, TopLeftBorderContext, BottomLeftBorderContext, TopRightBorderContext, BottomRightBorderContext, Topleftborder, Bottomleftborder, Toprightborder, Bottomrightborder} from './AllContext'
import Main from './Main'


class App extends Component{
   
    constructor(props) {
        super(props);
         this.state = {
         theme: themes.light,
         font : fonts.small,
         topleftborder : Topleftborder.sbr,
         bottomleftborder : Bottomleftborder.sbr,
         toprightborder : Toprightborder.sbr,
         bottomrightborder : Bottomrightborder.sbr
    };
    }

    toggleTheme = () => {
      this.setState(state => ({ theme: state.theme === themes.dark ? themes.light : themes.dark }));
    };

    handleFont = (value) => {
      console.log("Font Size", value);
      if(value === 10 ) this.setState({font : fonts.small})
        else if(value ===20) this.setState({font : fonts.medium})
          else if(value ===30) this.setState({font : fonts.large})
    }


    handleTopLeftBorder = (value) => {
      console.log("Top Left Border Radius",value);
     if(value === 0) this.setState({topleftborder : Topleftborder.sbr})
       else if(value === 16) this.setState({topleftborder : Topleftborder.mbr})
         else if(value === 32) this.setState({topleftborder : Topleftborder.lbr})
           else if(value === 50) this.setState({topleftborder : Topleftborder.xlbr})
    };

    handleBottomLeftBorder = (value) => {
      console.log("Bottom Left Border Radius",value);
     if(value === 0) this.setState({bottomleftborder : Bottomleftborder.sbr})
       else if(value === 16) this.setState({bottomleftborder : Bottomleftborder.mbr})
         else if(value === 32) this.setState({bottomleftborder : Bottomleftborder.lbr})
           else if(value === 50) this.setState({bottomleftborder : Bottomleftborder.xlbr})
    };

    handleTopRightBorder = (value) => {
      console.log("Top Right Border Radius",value);
     if(value === 0) this.setState({toprightborder : Toprightborder.sbr})
       else if(value === 16) this.setState({toprightborder : Toprightborder.mbr})
         else if(value === 32) this.setState({toprightborder : Toprightborder.lbr})
           else if(value === 50) this.setState({toprightborder : Toprightborder.xlbr})
    };

    handleBottomRightBorder = (value) => {
      console.log("Bottom Right Border Radius",value);
     if(value === 0) this.setState({bottomrightborder : Bottomrightborder.sbr})
       else if(value === 16) this.setState({bottomrightborder : Bottomrightborder.mbr})
         else if(value === 32) this.setState({bottomrightborder : Bottomrightborder.lbr})
           else if(value === 50) this.setState({bottomrightborder : Bottomrightborder.xlbr})
    };

    render() {
      const contextValue = {
        value : this.state.theme,
        handleTheme : this.toggleTheme
      }
      const contextValue_1 = {
        data : this.state.font,
        handleFont : this.handleFont,

      }
      const contextValue_2 = {
        data2 : this.state.topleftborder,
        handletopleftborder : this.handleTopLeftBorder,
      }
      const contextValue_3 = {
        data3 : this.state.bottomleftborder,
        handlebottomleftborder : this.handleBottomLeftBorder,
      }
      const contextValue_4 = {
        data4 : this.state.toprightborder,
        handletoprightborder : this.handleTopRightBorder,
      }
      const contextValue_5 = {
        data5 : this.state.bottomrightborder,
        handlebottomrightborder : this.handleBottomRightBorder,
      }
        return (
          <div>
            <ThemeContext.Provider value = {contextValue}>
            <FontContext.Provider value = {contextValue_1}>
            <TopLeftBorderContext.Provider value={contextValue_2}>
            <BottomLeftBorderContext.Provider value={contextValue_3}>
            <TopRightBorderContext.Provider value={contextValue_4}>
            <BottomRightBorderContext.Provider value={contextValue_5}>
            <Main/>
            </BottomRightBorderContext.Provider>
            </TopRightBorderContext.Provider>
            </BottomLeftBorderContext.Provider>
            </TopLeftBorderContext.Provider>
            </FontContext.Provider>
            </ThemeContext.Provider> 
            </div>    
        );
    }
}

export default App;
