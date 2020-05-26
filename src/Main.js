import React, {Component} from 'react';
import {ThemeContext, FontContext, TopLeftBorderContext, BottomLeftBorderContext, TopRightBorderContext, BottomRightBorderContext} from './AllContext'
import {Form, FormGroup, Input, Label, Row, Col, Container, Button} from 'reactstrap'
import './App.css'
import axios from 'axios'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';


class Main extends Component{   
    constructor(props) {
        super(props);
        this.state={
          results : [],
          checked : false,
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
          this.setState({results : response.data})
          console.log(this.state.results);
        })
        .catch(error=>{
          console.log(error);
        })
    }

    toggleCheck=()=>{
      const {checked} = this.state;
      this.setState({checked: !checked}, ()=>{console.log(this.state.checked)})
    }

  
    render() {
        return (
          <div>
          <ThemeContext.Consumer>
            {({value, handleTheme})=>(
              <FontContext.Consumer>
                {({data,handleFont})=>(
                  <TopLeftBorderContext.Consumer>
                    {({data2, handletopleftborder})=>(
                      <BottomLeftBorderContext.Consumer>
                        {({data3, handlebottomleftborder})=>(
                          <TopRightBorderContext.Consumer>
                            {({data4, handletoprightborder})=>(
                              <BottomRightBorderContext.Consumer>
                                {({data5, handlebottomrightborder})=>(
                                  <div style={{ backgroundColor : `${value.background}` , color : `${value.color}`}}>
                                    <Container>
                                      <Row>
                                        <Col sm={5} className="content"><h1><Slider min={0} max={50} marks={{ 0: 0, 16: 16, 32: 32, 50: 50 }} step={null} onChange={handletopleftborder} /></h1></Col>
                                        <Col sm={5} className="content"><h1><Slider min={0} max={50} marks={{ 0: 0, 16: 16, 32: 32, 50: 50 }} step={null} onChange={handletoprightborder} /></h1></Col>
                                      </Row>
                                      <Row>
                                        <Col sm={5} className="content"><h1><Slider min={0} max={50} marks={{ 0: 0, 16: 16, 32: 32, 50: 50 }} step={null} onChange={handlebottomleftborder} /></h1></Col>
                                        <Col sm={5} className="content"><h1><Slider min={0} max={50} marks={{ 0: 0, 16: 16, 32: 32, 50: 50 }} step={null} onChange={handlebottomrightborder} /></h1></Col>
                                      </Row>
                                    </Container><br/><br/>
                                    <Container>
                                    <Row>
                                    <Col sm={4} md={4} lg={3} xl={2}><Button onClick={handleTheme} style={{ backgroundColor : `${value.background}` , color : `${value.color}`, boxShadow : "1px 0px 3px"}}>Change Theme</Button></Col>
                                    <Col sm={8} md={8} lg={9} xl={10}><div style={{width : "150px", margin:"10px"}}><Slider min={10} max={30} marks={{ 10: "1x", 20: "2x", 30: "3x" }} step={null} onChange={handleFont} /></div></Col>
                                    </Row>
                                    </Container>
                                    <br/><br/>
                                    <Row className="ml-5">
                                      <Col sm={2}>
                                       <Form>
                                        <FormGroup check><Label check><Input type="checkbox" onChange={this.toggleCheck}/>{' '}Name</Label></FormGroup><br/>
                                        <FormGroup check><Label check><Input type="checkbox" onChange={this.toggleCheck}/>{' '}Username</Label></FormGroup><br/>
                                        <FormGroup check><Label check><Input type="checkbox" onChange={this.toggleCheck}/>{' '}Address</Label></FormGroup><br/>
                                       </Form>
                                      </Col>
                                      <Col sm={10}>
                                        {this.state.results.map((value,index)=>{
                                          return (
                                            <div key={index} className="content ml-5" style={{borderTopLeftRadius : `${data2.bordertopleftradius}`, borderTopRightRadius : `${data4.bordertoprightradius}`, borderBottomLeftRadius : `${data3.borderbottomleftradius}`, borderBottomRightRadius : `${data5.borderbottomrightradius}`}}>
                                              <p style={{ fontSize : `${data.fontSize}`}}>
                                                Username : {value.username}<br/>
                                                Name : {value.name}<br/>
                                                Email :{value.email}<br/>
                                                Address : City : {value.address.city}, Street : {value.address.street}, Zip Code : {value.address.zipcode}<br/>
                                                Phone : {value.phone}<br/>
                                              </p>
                                            </div>
                                        )})}
                                      </Col>
                                    </Row>
                                  </div>
                                  )}
                                </BottomRightBorderContext.Consumer>
                              )}
                            </TopRightBorderContext.Consumer>
                          )}
                        </BottomLeftBorderContext.Consumer>
                      )}
                    </TopLeftBorderContext.Consumer>
                  )}
                </FontContext.Consumer>
              )}
            </ThemeContext.Consumer>
          </div>
        );
      }
    }


export default Main;
