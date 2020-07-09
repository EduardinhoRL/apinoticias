import React, { useState, useEffect } from 'react';  
import Header from './components/Header'
import Formulario from './components/Formulario'
import ListadoNoticias from './components/ListadoNoticias'

function App() {

  const [categoria, setCategoria] = useState('')
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const consultarAPI = async () => {
      const key = "137d0148281a4236b8a53a8912d59d9a"
      const url = `http://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${key}`

      const res = await fetch(url)
      const noticias = await res.json()

      setNoticias(noticias.articles);
      
    }
    consultarAPI()
  },[categoria])

  return (
    <>
      <Header 
        titulo="Buscador de Noticias"
      />

      <div className="container">
        <Formulario
          setCategoria={setCategoria}
        />
        <ListadoNoticias 
          noticias={noticias}
        />
      </div>
    </>
  );
}

export default App;
