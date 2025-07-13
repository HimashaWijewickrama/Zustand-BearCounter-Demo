import './App.css';
import { useStore } from './store/store';

function App() {

  const { count, inc, dec, reset } = useStore();

  return (
    <div className="App">
      <h1>Bear Counter 🐻</h1>
      <span><h1>{count}</h1></span>
      <br></br>
      <button onClick={inc}><h3>One Up</h3></button>
      <button onClick={dec}><h3>One Down</h3></button>
      <br /><br />
      <button onClick={reset}><h3>Reset</h3></button>
    </div>

  );
}

export default App;
