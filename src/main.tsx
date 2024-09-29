import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Ejercicios from './Ejercicios.tsx'
import Formulario from './Formulario.tsx'

import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*<Ejercicios></Ejercicios>*/}
    <Formulario></Formulario>
  </React.StrictMode>,
)
