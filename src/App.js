import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IPOListPage from './pages/ipolistpage';
import IPODetailsPage from './pages/ipodetails';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<IPOListPage />} />
          <Route path="/ipo/:id" element={<IPODetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;