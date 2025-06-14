import { Provider } from 'react-redux'
import './App.css'
import AppRoutes from './AppRoutes/Routes'
import store from './store';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="app-container">
      <Provider store={store}>
        <ToastContainer
          theme="colored"
          position="top-right"
          hideProgressBar={true}
          autoClose={2000}
          closeButton={false}
          draggable={true}
        />
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App
