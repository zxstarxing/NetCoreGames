import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormGroup, ControlLabel, FormControl, Button, Image, HelpBlock } from 'react-bootstrap';
import {setGames}  from '../actions';

const propTypes = {

};


class GameForm extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            name: '',
            url: '',
            errors: {},
            loading:false
        };
    }

    handleChange(event) {
        let { name, value } = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        let errors = {};
        if (this.state.name === "") { errors.name = "name is not empty" };
        if (this.state.url === "") { errors.url = "url is not empty" };
        this.setState({ errors });
        const isValid = Object.keys(errors).length ===0;

        if(isValid){
            const {name,url} = this.state;
            this.props.setGames({name,url})
        }
    }
    render() {
        return (
            <form>
                <FormGroup controlId="name" validationState={this.state.errors.name ===undefined ? null: 'error'}>
                    <ControlLabel>Name</ControlLabel>
                    <FormControl
                        name="name"
                        type="text"
                        value={this.state.name}
                        placeholder="Name"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    {
                        this.state.errors.name !== '' && (<HelpBlock>{this.state.errors.name}</HelpBlock>)
                    }
                </FormGroup>
                <FormGroup controlId="url" validationState={this.state.errors.url === undefined ? null: 'error'}>
                    <ControlLabel>Url</ControlLabel>
                    <FormControl
                        name="url"
                        type="text"
                        value={this.state.url}
                        placeholder="Url"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    {
                        this.state.errors.url !== '' && (<HelpBlock>{this.state.errors.url}</HelpBlock>)
                    }
                </FormGroup>
                <FormGroup>
                    {
                        this.state.url !== '' && <Image src={this.state.url} thumbnail />
                    }
                </FormGroup>
                <Button onClick={this.handleSubmit.bind(this)} type="submit">Submit</Button>
            </form>
        );
    }
}


GameForm.propTypes = propTypes;

const mapStateToProps = (state)=>{
    return {
        games:state.games
    }
}


export default connect(mapStateToProps, { setGames})(GameForm);
