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
          <div className="min-h-screen flex items-center bg-purple-500">
          <div className="flex-1 mx-auto max-w-3xl p-10  border-2 rounded-lg  border-gray shadow-2xl  bg-black text-white shadow-2xl">
             <form onSubmit = { this.handleSubmit } className="">
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
                  <li className="">
                   
                  </li>
                  <li className="text-red-600 hover:text-green-700 italic">
                  <b>Withdraw Chips</b>
                  </li>
                  <li className="flex">
                      
                  </li>
                  <li className="">
                      <label>
                  TheCloutPoker Chips:
                  </label>
                  </li>
                  <li className="">
                  <label>
                  Amount in USD:
                  </label>
                  </li>
                  <li className="">
  
                  </li>
                  <li className="">
                  <input type ="text" className="border rounded-lg  border-black "
              placeholder="Chip to withdraw"
              value = { this.state.value }
              onChange = { this.handleChange }
              />
                  </li>
                  <li className="">
                  <input type = "text" className="border rounded-lg  border-black "
              value = {"$"+((this.state.value)*10) }
              />
                  </li>
                  <li class=""> 
                  </li>
                  <li class="">
                  <input type="submit" value="Withdraw" className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2  rounded-lg text-center" />
                  </li>
                  <li class="">
                  <input type="submit" value="Cancel" className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2  rounded-lg text-center" />
                  </li>
                  <li class="">
                     
                  </li>
              </ul>
              </form>
              <br />
                  <input type="range" min="1" max="100" value="50" className="col-span-3 slider slidecontainer"></input>
                   <br />
          </div>
      </div>
        );
    }
}


ReactDOM.render( <
    NameForm / > ,
    document.getElementById('root')
);