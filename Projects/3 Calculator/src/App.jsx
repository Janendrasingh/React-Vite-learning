import sty from './App.module.css';

function App() {
  return (
    <>
    <div className= {sty.calculator} >
      <input className={sty.display} type='text' />
      <div className={sty.buttonContainer}>
        <button className={sty.button}>C</button>
        <button className={sty.button}>1</button>
        <button className={sty.button}>2</button>
        <button className={sty.button}>3</button>
        <button className={sty.button}>4</button>
      </div>
    </div>
    </>
  )
}

export default App
