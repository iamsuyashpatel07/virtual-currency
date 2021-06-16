import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
  }

    render() {
        return ( 
        <form onSubmit = { this.handleSubmit } >
            <label >
            Enter Chip:
            <br />
            <input type = "text"
            value = { this.state.value }
            onChange = { this.handleChange }
            /> 
            </label> 
            <input type = "submit" value = "Submit" / >
            <br />
              {/* now this will show the usd*/}
              USD:
              <br />
        <input type = "text"
        value = {"$"+((this.state.value)*10) }
        /> 
            </form>
        );
    }
}

ReactDOM.render( <
    NameForm / > ,
    document.getElementById('root')
);