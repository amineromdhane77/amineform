import React from "react";
{/* importation des composants de boostrap */}
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
{/* importation de stylesheet formilo */}
import './Formilo.css';
{/* function formilo */}
function Formilo(){
    return (
      <div>
      <Form className="formulo">
          <div className="name1">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
      {/* creation du formulaire à l'aide du composant Form du boostrap */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group></div>
            <div className="btn">
            <Button variant="primary" type="submit">
              Submit
            </Button></div>
      
          </Form>
      
      </div>
        
        
      
    );
}
export default Formilo;
