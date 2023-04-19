import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
