import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Audio from "./Audio"

function App() {
  return (
    <div className="App">
      <h1 className='mb-4'>Style Transfer</h1>
      <Audio target="kts" />
      <Audio target="stk" />
    </div>
  );
}

export default App;
