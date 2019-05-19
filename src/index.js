
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <h1>Like or Nope ?</h1>,
  document.getElementById('root')
);
ReactDOM.render(
<img src={`${process.env.PUBLIC_URL}/img/3.png`} alt="Logo" class="user-image" />,
  document.getElementById('user-image-container')
);



var Users = [
    {
      name: 'bangya',
      age: 25,
      img: `${process.env.PUBLIC_URL}/img/1.png`
    },
    {
      name: 'ghost',
      age: 20,
      img: `${process.env.PUBLIC_URL}/img/2.png`
    },
    {
      name: 'Harajuku',
      age: 18,
      img: `${process.env.PUBLIC_URL}/img/3.png`
    }
  ];













// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
