import React, {Component} from 'react';
import {ThemeContext, FontContext, TopLeftBorderContext, BottomLeftBorderContext, TopRightBorderContext, BottomRightBorderContext} from './AllContext'
import {Form, FormGroup, Input, Label, Row, Col, Container, Button} from 'reactstrap'
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
                                        <Col sm={5} style={{ border : `${data2.border}`, margin : `${data2.margin}`, padding: `${data2.padding}`, textAlign : `${data2.textalign}`, borderTopLeftRadius : `${data2.bordertopleftradius}`}}><h1><Slider min={0} max={50} marks={{ 0: 0, 16: 16, 32: 32, 50: 50 }} step={null} onChange={handletopleftborder} /></h1></Col>
                                        <Col sm={5} style={{ border : `${data4.border}`, margin : `${data4.margin}`, padding: `${data4.padding}`, textAlign : `${data4.textalign}`, borderTopRightRadius : `${data4.bordertoprightradius}`}}><h1><Slider min={0} max={50} marks={{ 0: 0, 16: 16, 32: 32, 50: 50 }} step={null} onChange={handletoprightborder} /></h1></Col>
                                      </Row>
                                      <Row>
                                        <Col sm={5} style={{ border : `${data3.border}`, margin : `${data3.margin}`, padding: `${data3.padding}`, textAlign : `${data3.textalign}`, borderBottomLeftRadius : `${data3.borderbottomleftradius}`}}><h1><Slider min={0} max={50} marks={{ 0: 0, 16: 16, 32: 32, 50: 50 }} step={null} onChange={handlebottomleftborder} /></h1></Col>
                                        <Col sm={5} style={{ border : `${data5.border}`, margin : `${data5.margin}`, padding: `${data5.padding}`, textAlign : `${data5.textalign}`, borderBottomRightRadius : `${data5.borderbottomrightradius}`}}><h1><Slider min={0} max={50} marks={{ 0: 0, 16: 16, 32: 32, 50: 50 }} step={null} onChange={handlebottomrightborder} /></h1></Col>
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
                                            <div key={index} className="mr-5">
                                              <p style={{ fontSize : `${data.fontSize}`}}>
                                                Username : {value.username},
                                                Name : {value.name},
                                                Email :{value.email},
                                                Address : City : {value.address.city}, Street : {value.address.street}, Zip Code : {value.address.zipcode},
                                                Phone : {value.phone}
                                              </p>
                                              <hr/>
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
