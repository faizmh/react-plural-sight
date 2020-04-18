import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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
  </React.StrictMode>,
  document.getElementById('root')
);

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
