import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store/config';
import Timer from './Timer';

export default class Root extends Component {

  constructor() {
    
    super();

  }

  render() {

    return (
      <div className="container">
        <Provider store={store}>
          <Timer />
        </Provider>
      </div>
    );

  }

}
