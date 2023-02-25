import './App.css';
import { gen, ref } from "./path"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Style Transfer</h1>
      <div className='row mt-4'>
        <div className='col'><h4>Source</h4></div>
        <div className='col'><h4>Target</h4></div>
      </div>
      {gen.map((ele, index) =>
        <div className='row my-4' key={index}>
          <div className='col'><audio src={ele} controls /></div>
          <div className='col'><audio src={ref[index]} controls /></div>
        </div>
      )}
    </div>
  );
}

export default App;
