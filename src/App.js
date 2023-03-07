import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Audio from "./Audio"
import NewAudio from './newAudio';

function App() {
  return (
    <div className="App">
      <h1 className='mb-4'>Style Transfer</h1>
      <NewAudio heading="Soliga to Kannada(Female to Male)" id="sTok" />
      <NewAudio heading="Kannada to Kannada(Female to Male)" id="kTok" />
      <NewAudio heading="Kannada to Kannada" id="kToks3" />
      <Audio target="kts" />
      <Audio target="stk" />
    </div>
  );
}

export default App;
