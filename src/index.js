import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( //calling the render method of ReactDOM
  <React.StrictMode>
    <App />
    {/*app is the parameter (imported from above)*/}
  </React.StrictMode>,
  document.getElementById('root')
    //It basically says,
    //ReactDOM.render this particular thing (App), and then attach it to this DOM element in my index.html page.
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
