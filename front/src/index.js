import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

(async () => {
    const rawResponse = await fetch('http://dating/api/registration', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ a: 1, b: 'Textual content' })
    });
    const content = await rawResponse.json();

    console.log(content);
})();
