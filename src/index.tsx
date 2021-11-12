import ReactDOM from 'react-dom';
import { GiftApp } from './GiftApp';

import { Provider } from 'react-redux';
import { store } from './redux';

import 'animate.css';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <GiftApp />
    </Provider>
  </Router>,
  document.getElementById('root')
);


