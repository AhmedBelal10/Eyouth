import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store/store'
import { Provider } from 'react-redux'
import Counter from './components/Counter.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <App /> */}
    <Counter />
  </Provider>
)
