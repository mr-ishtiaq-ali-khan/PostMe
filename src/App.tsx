import Home from "./pages/Home"
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';
import "./assets/styles/main.scss";
import { ToastContainer } from 'react-toastify';
import NavigationBar from "./components/navigation/NavigationBar";

function App() {

  return (
    <Provider store={store}>
      <NavigationBar />
      <ToastContainer />
      <Home />
    </Provider>
  )
}

export default App
