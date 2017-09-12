import React, { Component } from 'react';
import styled from 'styled-components'
import Words from './Words';

class InputBox extends Component {
    constructor(props){
        super(props);

        this.state = {
            input: '',
            description: [],
            clicked: false,
            names: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleInputClick = this.handleInputClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this)
        this.clear = this.clear.bind(this);
    }
    handleInputChange(e){
        this.setState({
            input: e.target.value
        })
    }
    handleInputClick(userInput){
        this.setState({
            clicked: !this.state.clicked,
            names: [...this.state.names, userInput],
            description: [...this.state.description, "this is a description and I'm going to make it really long so that I can test what is going on here"]
        })
        this.clear();
    }
    handleKeyPress(target) {
        if(target.charCode==13){
            this.handleInputClick(this.state.input)
        }
    }
    clear(){
        this.setState({
            input: ``
        })
    }
    render() {
        let list = this.state.names.map((name, i) => {
            return <Name key={i}>{name}</Name>
        })
        let descriptionList = this.state.description.map((desc, i) => {
            return <Name key={i}>{desc}</Name>
        })
        return (
            <Container>
                <TextBox 
                    value={this.state.input}
                    onChange={this.handleInputChange}
                    onKeyPress={ this.handleKeyPress }/>
                <Button onClick={ () => this.handleInputClick(this.state.input) }>Print Please</Button>
                <Divider/>
                {/* {(this.state.clicked) ? <Name>{this.state.names}</Name> : null} */}
                <Words input={list} desc={descriptionList}/>
            </Container>
        );
    }
}

export default InputBox;

const Container = styled.section`
    text-align: center;
`
const TextBox = styled.input`
    border: 1px solid #8EA4A2;
    color: #02043E;
    margin: 10px;
    padding-left: 10px;
    border: none;
    border-bottom: 1px solid #8EA4A2;
    background: transparent;
`
const Button = styled.button`
    background: #8EA4A2;
    padding: 10px;
    color: #02043E;
    border: 1px solid #8EA4A2;
    border-radius: 10px;
    margin: 10px;
`
const Divider = styled.div`
    width: 500px;
    height: 3px;
    background: #8EA4A2;
    margin: 10px;
`
const Name = styled.h2`
    color: #02043E;
    text-align: center;
    margin: 0;
    padding: 0;
    border: 1px solid black;
`