/* Code 01 : 

import React from 'react'; 
const Greeting = ({ name }) => { 
return <div>Hello, {name}!</div>;
 };
 export default Greeting*/

// here is the convereted code to typescript

import React, { FC } from 'react';

// Define the interface for the props
interface GreetingProps {
  name: string;
}

// Functional component with typed props
const Greeting: FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;

/* Code 02 :

import React, { Component } from 'react'; 
class Counter extends Component { 
state = {
 count: 0
 }; increment = () => {
 this.setState({ count: this.state.count + 1 }); 
}; 
render() { 
return 
( <div> 
<p>Count: {this.state.count}</p> 
<button onClick={this.increment}>Increment</button> 
</div> );
 }
 } 
export default Counter;*/

// here is the converted code to typescript

import React, { Component } from 'react';

// Define the interface for the component's state
interface CounterState {
  count: number;
}

// Define the interface for the component's props (empty if no props are needed)
interface CounterProps {}

// Class component with typed state and props
class Counter extends Component<CounterProps, CounterState> {
  // Initialize the state
  state: CounterState = {
    count: 0,
  };

  // Method to increment the count
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render method
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
