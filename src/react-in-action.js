import React from 'react';
import ReactDOM from 'react-dom';

const render = () => {
  document.getElementById('mountNode').innerHTML = `
    <div>
      Hello HTML
      <input />
      <pre>${new Date().toLocaleTimeString()}</pre>
    </div>
  `;

  ReactDOM.render(<Wrapper1 />, document.getElementById('mountNode2'));
};

// function Wrapper1() {
//   return React.createElement(
//     'div',
//     null,
//     'Hello React ',
//     React.createElement('input', null),
//     React.createElement('pre', null, new Date().toLocaleTimeString())
//   );
// }

function Wrapper1() {
  return (
    <div>
      Hello React &nbsp;
      <input />
      <pre>{new Date().toLocaleTimeString()}</pre>
    </div>
  );
}

setInterval(render, 1000);
