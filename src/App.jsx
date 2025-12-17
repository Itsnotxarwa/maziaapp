import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Dashboard from './components/dashboard';
import HomePage from './HomePage';

function App() {

  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
