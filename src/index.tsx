import { render } from 'react-dom';
import App from './app/App';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';


render(
  <Provider store={store}>
    <Router>
     <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


