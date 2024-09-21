import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Citycard from './components/Card/Citycard';
import Login from './components/Login/Login';
import Dashboardadmin from './components/Dashboard/Dashboardadmin';
import Calendar from './components/Function/Calendar';
import Member from './components/Function/Membar';
import Meeting from './components/Function/Meeting';
import Project from './components/Function/Project';
import Inventory from './components/Function/Inventory';
import Setting from './components/Function/Setting';
import Collab from './components/Function/Collab';
import InterDepDash from './components/InterDepConn/InterDepDash'
import Mapbox from './components/Function/Mapbox';

function App() {
  return (
    <Router basename="/cpucsgProject">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/citycard" element={<Citycard />} />
        <Route path="/login/:city" element={<Login />} />
        <Route path="/dashboardadmin" element={<Dashboardadmin />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/membar" element={<Member />} />
        <Route path="/meeting" element={<Meeting />} />
        <Route path="/project" element={<Project />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path='/mapbox' element={<Mapbox />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/collab" element={<Collab />} />
        <Route path='/interdepdash' element={<InterDepDash />} />
      </Routes>
    </Router>
  );
}

export default App;
