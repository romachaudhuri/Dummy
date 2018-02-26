"use strict"
import React from 'react';
import {Well, Panel, FormControl, FormGroup, ControlLabel,Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {postBooks} from '../../actions/booksActions';
import {findDOMNode} from 'react-dom';

class BooksForm extends React.Component{

    handleSubmit(){
       const book=[{
        title:findDOMNod(this.refs.title).value, 
        description:findDOMNod(this.refs.description).value, 
       price:findDOMNod(this.refs.price).value, 
       }]
        this.props.postBooks(book);
    }

    render(){
        return(
        <Well>
          <Panel>
              <FormGroup controlId="title">
                <ControlLabel>Title</ControlLabel>
                <FormControl
                type="text"
                placeholder="Enter Title"
                ref="title" />
              </FormGroup>

                <FormGroup controlId="description">
                <ControlLabel>Description</ControlLabel>
                <FormControl
                type="text"
                placeholder="Enter description"
                ref="description" />
              </FormGroup>

                <FormGroup controlId="price">
                <ControlLabel>price</ControlLabel>
                <FormControl
                type="text"
                placeholder="Enter age"
                ref="price" />
              </FormGroup>
              <Button onClick={this.handleSubmit.bind(this)}bsStyle="primary">ADD  </Button>
              </Panel>  
        </Well>
        )
    }
}
function mapDispatchToProps(dispatch){
    return bindActionCreators({postBooks},dispatch)
}
export default connect(null, mapDispatchToProps)(BooksForm);