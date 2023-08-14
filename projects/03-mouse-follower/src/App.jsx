import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0})

  // pointer move
  useEffect(() => {
    const handleMove = (event) => {
      const {clientX, clientY} = event
      setPosition({x: clientX, y: clientY})
    }

    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    
    // El cleanup se ejecuta cuando:
    // el componente se desmonta
    // y cuando cambian las dependencias, antes de ejecutar el evento de nuevo
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])
  
  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente
  
  // change body class name
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
    document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <main>
      <div style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} ></div>
      <button onClick={() => setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Acticar'} seguir puntero</button>
    </main>
  )
}

export default App
