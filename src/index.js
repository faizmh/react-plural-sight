import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let expression = 10; // valid values are 0-6
switch (expression) {
  case 0:
ReactDOM.render(
  // JS way of rendering
  // React.createElement(Hi, null),

  <React.StrictMode>
    <Button />
    <App />
    <Hello />
    <Hi />
    <lowercase />
    <Lowercase />
    <CounterButton />
    <CounterButton1 />
    <FunctionButton />
  </React.StrictMode>,
  document.getElementById('root')
);
    console.log('Inside Case 0');
    break;

  case 1:
    // Basic Example of Render with 1 component
    ReactDOM.render(<CounterButton />, document.getElementById('root'));
    console.log('Inside Case 1');
    break;

  case 2:
    // Basic Example of Render with 2 component - use array
    ReactDOM.render(
      [<CounterButton />, <CounterButton />],
      document.getElementById('root')
    );
    console.log('Inside Case 2');
    break;

  case 3:
    // Basic Example of Render with 2 component - use parent div
    ReactDOM.render(
      <div>
        <CounterButton />
        <CounterButton />
      </div>,
      document.getElementById('root')
    );
    console.log('Inside Case 3');
    break;

  case 4:
    // Basic Example of Render with 2 component - use React Fragement
    // this doesnt inject parent div
    ReactDOM.render(
      <React.Fragment>
        <CounterButton />
        <CounterButton />
      </React.Fragment>,
      document.getElementById('root')
    );
    console.log('Inside Case 4');
    break;

  case 5:
    // another JSX shortcut for React Fragment
    ReactDOM.render(
      <>
        <CounterButton />
        <CounterButton />
      </>,
      document.getElementById('root')
    );
    console.log('Inside Case 5');
    break;

  case 6:
    function Wrapper() {
      return (
        <div>
          <CounterButton />
          <CounterButton />
        </div>
      );
    }
    ReactDOM.render(<Wrapper />, document.getElementById('root'));
    console.log('Inside Case 6');
    break;

  default:
    console.log('Do nothing');
}
// The JSX way of building component
function Hello() {
  return <div> Hello here</div>;
}

// the JS way f building component

function Hi() {
  return React.createElement('div', null, 'Hi there!!');
}

function lowercase() {
  return <div> Does this lowercase component render </div>;
}

function Lowercase() {
  return (
    <div>
      Does this lowercase component render- only if the function name is in caps
    </div>
  );
}

// expressions using {}
function Button() {
  return <button>{Math.random() + 's'}</button>;
}

// using functions
function logFn() {
  console.log(Math.random() + 'A');
}

// Passsing functions inline as well as externally defined
function FunctionButton() {
  return [
    <button onClick={logFn}>LOG</button>,
    <button
      onClick={function logFn() {
        console.log(Math.random() + 'B');
      }}
    >
      LOG
    </button>,
  ];
}

// using state with useState hook
// each component has it own state!! wow
function CounterButton() {
  const [counter, setCounter] = React.useState(0);
  const handleClick = () => setCounter(counter + 1);
  return <button onClick={handleClick}>Counter :: {counter}</button>;
}

function CounterButton1() {
  const [counter, setCounter] = React.useState(0);
  return (
    <button onClick={() => setCounter(counter + 1)}>
      Counter1 :: {counter}
    </button>
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
