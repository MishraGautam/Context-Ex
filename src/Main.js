import React, {Component} from 'react';
import {ThemeContext, FontContext} from './Themes'
import {Form, FormGroup, Input, Label, Row, Col, Container} from 'reactstrap'
import axios from 'axios'


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

    static contextType = ThemeContext;
    render() {
        const value = this.context;
        return (
          <div style={{ backgroundColor : `${value.background}` , color : `${value.color}`}}>
          <Container>
          <Row><Col sm={6}>abc</Col><Col sm={6}>abc</Col></Row>
          <Row><Col sm={6}>abc</Col><Col sm={6}>abc</Col></Row>
          </Container><br/><br/>
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
              Username : {value.username},
              Name : {value.name},
              Email :{value.email},
              Address : City : {value.address.city}, Street : {value.address.street}, Zip Code : {value.address.zipcode},
              Phone : {value.phone}
              <hr/>
              </div>
              );})}
            </Col>
          </Row>
           </div>

        );
    }
}


export default Main;
