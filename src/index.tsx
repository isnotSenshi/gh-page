import React from 'react'
import reportWebVitals from './reportWebVitals'
import App from './App/App'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const pjson = require('../package.json')
console.log("Version: ", pjson.version)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// registerServiceWorker()
reportWebVitals()

