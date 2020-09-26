import 'bootstrap/dist/css/bootstrap.min.css';
import '../components/components.css';
import React from "react";
import {Container, Col, Form,FormGroup, Label, Input,Button} from 'reactstrap';

function LoginPage()
{
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
                />
              </FormGroup>
            </Col>
            <button className ="SubmitButton">Submit</button>
          </Form>
        </Container>
      );
}

export default LoginPage;