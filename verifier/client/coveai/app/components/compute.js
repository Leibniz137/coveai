import EmbarkJS from 'Embark/EmbarkJS';
import React from 'react';
import { Form, FormGroup, FormControl, HelpBlock, Button } from 'react-bootstrap';
 
class Compute extends React.Component {

    constructor(props) {
      super(props);
  
      this.state = {
        valueSet: 10,
        valueGet: "",
        logs: []
      }

      fetch('http://localhost:3000/keygen')
      .then(results => {
        return results.json();
      }).then(data => {
        console.log(data);
      });

    }
  
    handleChange(e){
      this.setState({valueSet: e.target.value});
    }
  
    prove(e){
      e.preventDefault();
  
      fetch('http://localhost:3000/prove')
      .then(results => {
        return results.json();
      }).then(data => {
        console.log(data);
      });
    }
  
    verify(e){
      e.preventDefault();
  
      fetch('http://localhost:3000/verify')
      .then(results => {
        return results.json();
      }).then(data => {
        console.log(data);
      });
    }
    
    render(){
      return (<React.Fragment>
          <h3> 1. Compute and Generate Proof</h3>
          <Form inline>
            <FormGroup>
              <Button bsStyle="primary" onClick={(e) => this.prove(e)}>Compute & Prove</Button>
            </FormGroup>
          </Form>
          
          <h3> 2. Verify Proof of Compute</h3>
          <Form inline>
            <FormGroup>
              <Button bsStyle="primary" onClick={(e) => this.verify(e)}>Verify</Button>
            </FormGroup>
          </Form>          
      </React.Fragment>
      );
    }
  }

  export default Compute;