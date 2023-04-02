import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Authprovider from './context/Authprovider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Authprovider>
 <App />
 </Authprovider>
  </React.StrictMode>,
)
