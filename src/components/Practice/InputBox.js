import React, { Component } from 'react';
import styled from 'styled-components'
import Words from './Words';

class InputBox extends Component {
    constructor(props){
        super(props);

        this.state = {
            input: '',
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
            names: [...this.state.names, userInput]
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
        return (
            <Container>
                <TextBox 
                    value={this.state.input}
                    onChange={this.handleInputChange}
                    onKeyPress={ this.handleKeyPress }/>
                <Button onClick={ () => this.handleInputClick(this.state.input) }>Print Please</Button>
                <Divider/>
                {/* {(this.state.clicked) ? <Name>{this.state.names}</Name> : null} */}
                <Words input={list}/>
            </Container>
        );
    }
}

export default InputBox;

const Container = styled.section`
    text-align: center;
    font-size: 22px;
`
const TextBox = styled.input`
    border: 1px solid purple;
    color: purple;
    margin: 10px;
    padding-left: 10px;
    border: none;
    border-bottom: 1px solid purple;
    background: gray;
`
const Button = styled.button`
    background: purple;
    padding: 10px;
    color: white;
    border: 1px solid black;
    border-radius: 10px;
    margin: 10px;
`
const Divider = styled.div`
    width: 500px;
    height: 3px;
    background: purple;
    margin: 10px;
`
const Name = styled.h2`
    color: black;
    text-align: center;
    margin: 0;
    padding: 0;
`