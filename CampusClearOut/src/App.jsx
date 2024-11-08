import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Listings } from './pages/Listings';
import { MyListings } from './pages/MyListings';
import { MyRequests } from './pages/MyRequests';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Listings />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/mylistings" element={<MyListings />} />
        <Route path="/dashboard/myrequests" element={<MyRequests />} />
      </Routes>
    </Router>
  );
}

export default App
