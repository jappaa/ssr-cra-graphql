import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import client from './client';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

console.log('HYDRATING')

ReactDOM.hydrate(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);
// registerServiceWorker();
