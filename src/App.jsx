import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './HomePage';
import Login from "./Login";
function App() {

  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/connecter" element={<Login />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
