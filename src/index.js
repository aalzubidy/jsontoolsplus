import React from 'react';
import { hydrate, render } from 'react-dom';
import ReactGA from 'react-ga';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const TRACKING_ID = 'UA-91856744-2';
ReactGA.initialize(TRACKING_ID);

const rootElement = document.getElementById("root");

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
