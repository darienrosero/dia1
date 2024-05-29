import { Buttons } from "./components"

function App() {


  return (
    <>
      <div id="main">
        <div className='circulo'></div>
        <div className='circulo2'></div>

        <div className='titulo'>
          <h1 className='titulo1'>Welcome to the</h1>
          <h1 className='titulo2'>Frontend Quiz!</h1>
          <h2 className="subtitulo">Pick a subject to get started. </h2>
        </div>

        <div className="contenedor">  <Buttons /> </div>
      </div>
    </>
  )
}

export default App
