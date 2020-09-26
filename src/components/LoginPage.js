import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/components.css';
import React, { useState } from "react";
import {Container, Col, Form,FormGroup, Label, Input} from 'reactstrap';






function LoginPage()
{
  const [credentials,setCredentials] = useState({

    username:"",
    password:""
  });


    return (
        <Container>
          <h2 className = "MidHeaders">Log In to Web-Jsonify</h2>
          <Form className="form">
            <Col>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="exampleEmail"
                  placeholder="myemail@email.com"
                  value={credentials.username}
                  onChange={e=>{setCredentials({...credentials, username: e.target.value});}}
                />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="examplePassword"
                  placeholder="********"
                  value={credentials.password}
                  onChange={e=>{setCredentials({...credentials, password: e.target.value});}}
                />
              </FormGroup>
            </Col>
            <button className ="SubmitButton" 

                                     onClick = {e =>{
                                       //alert(`Credentials: ${credentials.username} and ${credentials.password}`)
                                       alert("Invalid Credentials");
                                     }} 

                                  // onClick={async(e)=>{
                                  //   e.preventDefault();
                                  //   const JSONString = credentials;
                                  //   const response = await fetch(`${ipaddress}login`,{
                                  //     method: 'POST',
                                  //     headers:{
                                  //       'Content-Type':'application/json'
                                  //     },
                                  //     body:JSON.stringify(JSONString)
                                  //   }).then(response=>response.json()).then(async(jsonData)=>{
                                  //     if(jsonData["Is_Valid"])
                                  //     {
                                  //       const BackendData = await fetch(`${ipaddress}fetching`,{
                                  //         method: 'POST',
                                  //         headers:{
                                  //           'Content-Type':'application/json'
                                  //         },
                                  //         body:JSON.stringify(JSONString)
                                  //       }).then(response=>response.json()).then((jsonBackend)=>{
                                  //         Auth.login(jsonBackend);
                                  //         props.history.push("/login-props-test");
                                  //       });
                                        
                                  //     }
                                  //     else
                                  //     {
                                  //       alert("Invalid Credentials! Error Message: "+jsonData["Error_Message"]);
                                  //     }
                                  //   });
                                  // }}

            >Submit</button>
          </Form>
        </Container>
      );
}

export default LoginPage;



