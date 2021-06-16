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
      alert('chip: ' + this.state.value);
      event.preventDefault();
  }

    render() {
        return ( 
        <form onSubmit = { this.handleSubmit } >
           <input className="rounded text-pink-500"  type = "submit"
        value = {"Hello World" }
        /> 
        <input type = "submit"
        value = {"ab192agjka8na71ka" }
        /> 
           <br />
            <label >
            Chip:
            <br />
            <input type = "text"
            placeholder="Chip to withdraw"
            value = { this.state.value }
            onChange = { this.handleChange }
            /> 
            </label> 
            <br />
              {/* now this will show the usd*/}
              USD:
              <br />
         <input type = "text"
        value = {"$"+((this.state.value)*10) }
        /> 
           <br />
        <input type = "submit" value = "withdraw" / >
            </form>
        );
    }
}
    

ReactDOM.render( <
    NameForm / > ,
    document.getElementById('root')
);