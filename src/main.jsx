import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Pokedex from './contexts/PokemonContext'
import './color.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Pokedex>
      <ToastContainer limit={1} autoClose={1500} />
      <App />
    </Pokedex>
  </React.StrictMode>
)
