import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CharacterGrid from './pages/CharacterGrid';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharacterGrid />} />
        <Route path="/character/:id" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
