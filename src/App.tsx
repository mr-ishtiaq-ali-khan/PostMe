import Home from "./pages/Home"
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';
import "./assets/styles/main.scss";
import { ToastContainer } from 'react-toastify';
import NavigationBar from "./components/navigation/NavigationBar";

/**
 * The App component renders NavigationBar, ToastContainer, and Home components wrapped in a Provider
 * component.
 * @returns The App component is being returned, which includes the NavigationBar, ToastContainer, and
 * Home components wrapped in a Provider component with a store prop.
 */
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
