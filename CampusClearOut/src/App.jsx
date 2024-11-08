import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Listings } from './pages/Listings';
import { MyListings } from './pages/MyListings';
import { MyRequests } from './pages/MyRequests';
import MainLayout from './MainLayout';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Listings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/mylistings" element={<MyListings />} />
          <Route path="/dashboard/myrequests" element={<MyRequests />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App
