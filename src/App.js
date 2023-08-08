import './App.scss';
import './compement/userTable.scss'
import Header from './compement/Header';

import Container from 'react-bootstrap/esm/Container';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import AppRouter from './Router/AppRouter';
import { useDispatch } from 'react-redux';
import { handleReset } from './redux/Action/UserAction';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    if (localStorage.getItem("token")) {
      dispatch(handleReset())

    }
  }, [])
  return (
    <>
      <Header />
      <Container  >
        <AppRouter />
      </Container>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
