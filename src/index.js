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
       <div class="flex w-full min-h-screen justify-center items-center">
         <div class="border-2 rounded-lg  border-black bg-gray-200 shadow-2xl">
           <form onSubmit = { this.handleSubmit } class="">
              <div class="m-4">Enter Chip:</div>
              <input type ="text" class="mx-8 border rounded-lg  border-black "
              placeholder="Chip to withdraw"
              value = { this.state.value }
              onChange = { this.handleChange }
              />
              <br />
              {/* now this will show the usd*/}
              <div class="m-4">Your USD:</div>
              <input type = "text" class="mx-8 border rounded-lg  border-black "
              value = {"$"+((this.state.value)*10) }
              />
              <br />
              <div class="my-8 grid justify-items-center">
                 <input type="submit" value="Withdraw" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2  rounded-full text-center" />
               </div>          
           </form>
         </div>
       </div>
        );
    }
}


ReactDOM.render( <
    NameForm / > ,
    document.getElementById('root')
);