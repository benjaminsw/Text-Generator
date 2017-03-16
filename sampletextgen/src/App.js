import React, { Component } from 'react';
import './App.css';
import Output from './Component/Output'
import Select from './Component/Controls/Select'
import axios from 'axios';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            paras:4,
            html:true,
            text:''
        }
    }

    componentWillMount(){
        this.getSampleText();
    }

    getSampleText(){
        axios.get('http://hipsterjesus.com/api?paras='+this.state.paras+'&html='+this.state.html)
        .then((response)=> {
            this.setState({text:response.date.text}, function(){
                console.log(this.state);
            });
        })
        .catch((err) => {
            console.log(err);
        });
    }

  render() {
    return (
      <div className="App container">
        <h1>ReactJS Sample Text Generator<h1>
        <hr />
        <form class="form-inline">
            <div class="form-group">
                <label>Include HTML:</label>
                <Select value={this.state.html} onchange={this.showHtml.bind(this)}/>
            </div>
        </form>
        <Output value={this.state.text}/>
      </div>
    );
  }
}

export default App;
