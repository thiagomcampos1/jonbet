import { useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  useEffect(() => {
    window.location.href = "https://jonbet.cxclick.com/visit/?bta=38815&brand=jonbet";
  }, []); 

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <a
          className="App-link"
          href="https://jonbet.cxclick.com/visit/?bta=38815&brand=jonbet"
          target="_blank"
          rel="noopener noreferrer"
        >
          Clique aqui se o redirecionamento não ocorrer automaticamente
        </a>
    </>
  )
}

export default App
