import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharacterGrid from './pages/CharacterGrid';
import ProfilePage from './pages/ProfilePage';
import LocationGrid from './pages/LocationGrid';
import EpisodeGrid from './pages/EpisodeGrid';
import Navigation from './components/Navigation'; 
import LocationPage from './pages/LocationPage';
import EpisodePage from './pages/EpisodePage';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<CharacterGrid />} />
        <Route path="/character/:id" element={<ProfilePage />} />
        <Route path="/locations/:id" element={<LocationPage />} />
        <Route path="/locations" element={<LocationGrid />} />
        <Route path="/episodes/:id" element={<EpisodePage />} />
        <Route path="/episodes" element={<EpisodeGrid />} />
      </Routes>
    </Router>
  );
};

export default App;
