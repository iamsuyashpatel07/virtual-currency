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
          <div class="px-12 pb-10">
          <div class="w-full mb-2">
            <div class="flex justify-center">
           <input class="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"  type = "submit"
        value = {"Hello World" }
        /> 
        </div>
        </div>
        <div class="w-full mb-2">
            <div class="flex justify-center">
        <input type = "submit" class="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
        value = {"ab192agjka8na71ka" }
        /> 
        </div>
        </div>
           <br />
           <div class="w-full mb-2">
            <div class="flex justify-center">
        
            Chip:
            <input type = "text" class="px-3  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
            placeholder="Chip to withdraw"
            value = { this.state.value }
            onChange = { this.handleChange }
            />  
            </div>
            </div>
            <br />
              {/* now this will show the usd*/}
              <div class="w-full mb-2">
            <div class="flex justify-center">
              USD:
              <br />
         <input type = "text" class="px-3  w-full border rounded py-2 text-gray-700 focus:outline-none items-center"
        value = {"$"+((this.state.value)*10) }
        /> 
        </div>
        </div>
           <br />
           <div class="w-full mb-2">
            <div class="flex justify-center">
        <input class="px-8  w-full border rounded py-2 text-gray-700 focus:outline-none items-center" type = "submit" value = "withdraw" / >
          </div>
          </div>
           </div>
            </form>
        );
    }
}
    

ReactDOM.render( <
    NameForm / > ,
    document.getElementById('root')
);