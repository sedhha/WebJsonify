import React from "react";

import { Constants } from "./Constants";

import {
  Jumbotron,
  Button,
  Navbar,
  Form,
  Nav,
  NavDropdown,
  FormControl,
  Card,
  CardGroup,
  Accordion,
} from "react-bootstrap";
import "./cv1.css";

const { Name, Surname, ShortBio, Cards, Faq, Quote } = Constants;

const CV1 = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          {Name} {Surname}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Contact Me</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <Jumbotron className="bg-white w-100 mx-auto text-center">
        <h1>
          {Name} {Surname}
        </h1>
        <p>{ShortBio}</p>
        <p>
          <Button variant="primary">Learn more about me</Button>
        </p>
      </Jumbotron>

      <section>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src={Cards.FirstCard.ImageUrl} />
            <Card.Body>
              <Card.Title>{Cards.FirstCard.Title}</Card.Title>
              <Card.Text>{Cards.FirstCard.Description}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Cards.SecondCard.ImageUrl} />
            <Card.Body>
              <Card.Title>{Cards.SecondCard.Title}</Card.Title>
              <Card.Text>{Cards.SecondCard.Description}</Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="top" src={Cards.ThirdCard.ImageUrl} />
            <Card.Body>
              <Card.Title>{Cards.ThirdCard.Title}</Card.Title>
              <Card.Text>{Cards.ThirdCard.Description}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </section>

      <section className="mt-4 w-50 mx-auto" id="about">
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                {Faq.FirstSection.Title}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>{Faq.FirstSection.Content}</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                {Faq.SecondSection.Title}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>{Faq.SecondSection.Content}</Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </section>

      <section className="w-50 mx-auto mt-4">
        <Card className="">
          <Card.Header>My favorite quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p> {Quote.Quote} </p>
              <footer className="blockquote-footer">
                By <cite title="Source Title">{Quote.Author}</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </section>

      <footer className="footer mt-4 py-3 pt-2 pb-4">
        <div className="container">
          <span className="text-muted">
            {Name} {Surname} - Copyright Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default CV1;
