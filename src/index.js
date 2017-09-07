import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import './app'

var Router = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

render(<Router />, document.getElementById('root'));
