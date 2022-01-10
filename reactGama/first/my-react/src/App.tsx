import Router from './routes/routes';
import GlobalStyle from './style/globalStyle';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';

import store from './store';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <GlobalStyle />
        <Router />
      </Provider>
    </>
  );
}

export default App;
