import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GraphData from './ShareH-Graph';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/" element={<GraphData />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
