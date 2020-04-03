import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/App.scss';
import App from './components/App';
import Footer from './components/card/Footer';
import * as serviceWorker from './serviceWorker';
import Header from './components/card/Header';
import Form from './components/card/MainComponents/Form';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Form />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
