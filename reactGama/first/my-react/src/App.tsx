import Router from './routes/routes';
import GlobalStyle from './style/globalStyle';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
