import { Provider } from 'react-redux'
import './App.css'
import AppRoutes from './AppRoutes/Routes'
import store from './store';


function App() {
 return (
    <div className="app-container">
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </div>
  );
}

export default App
