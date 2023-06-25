import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import BeerList from './redux/BeerList';
import reducer from './redux/reducer';

const store = createStore(reducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <BeerList />
    </Provider>
  );
};

export default App;
