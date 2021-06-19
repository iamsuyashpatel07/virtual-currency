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
          <div class="min-h-screen flex items-center bg-purple-500">
          <div class="flex-1 mx-auto max-w-3xl p-10  border-2 rounded-lg  border-black shadow-2xl  bg-gray-200 shadow-2xl">
             <form onSubmit = { this.handleSubmit } className="">
              <ul class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-8">
                  <li class="">
                  <input type="submit" value="Hello World" className="bg-gray-500 text-black font-bold py-1 px-2  rounded-full text-center" />
                  </li>
                  <li class="">
                  <input type="submit" value="ab1me4mcn5cnx" className="bg-gray-500 text-black font-bold py-1 px-2  rounded-full text-center" />
                  </li>
                  <li class="flex">
                     
                      <div class="border-2 border-black">
                          <div class="float-left">
                              <b class="pr-4">Settings</b>
                          </div>
                          <div class="float-right">
                              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                        
                      </div>
                      
                  </li>
                  <li class="">
                      Enter Chip:
                  </li>
                  <li class="">
                      Enter USD:
                  </li>
                  <li class="">
  
                  </li>
                  <li class="">
                  <input type ="text" className="border rounded-lg  border-black "
              placeholder="Chip to withdraw"
              value = { this.state.value }
              onChange = { this.handleChange }
              />
                  </li>
                  <li class="">
                  <input type = "text" className="border rounded-lg  border-black "
              value = {"$"+((this.state.value)*10) }
              />
                  </li>
                  <li class="">
                     
                  </li>
                  <li class="">
                  <input type="submit" value="Withdraw" className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2  rounded-full text-center" />
                  </li>
                  <li class="">
                  <input type="submit" value="Cancel" className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2  rounded-full text-center" />
                  </li>
                  <li class="">
                     
                  </li>
              </ul>
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