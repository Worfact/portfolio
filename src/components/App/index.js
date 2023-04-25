import { Route, Routes } from 'react-router-dom';
import Contact from '../Contact';
import Home from '../Home';
import Passions from '../Passions';
import Projets from '../Projets';
import Competences from '../Competences';
import './styles.scss';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/passions" element={<Passions />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
