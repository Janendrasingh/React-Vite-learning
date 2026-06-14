import sty from './App.module.css';
import ButtonContainer from './buttonsContainer';
import Display from './components/Display';

function App() {
  return (
    <>
    <div className= {sty.calculator} >
      <Display />
      <ButtonContainer />
    </div>
    </>
  )
}

export default App
