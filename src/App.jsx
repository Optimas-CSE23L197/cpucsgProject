import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Dashboardadmin from './components/Dashboard/Dashboardadmin';
import Calendar from './components/Function/Calendar';
import Membar from './components/Function/Membar';
import Meeting from './components/Function/Meeting';
import Project from './components/Function/Project';
import Inventory from './components/Function/Inventory';
import Setting from './components/Function/Setting';
import Collab from './components/Function/Collab';
import Citycard from './components/Card/Citycard';
import Login from './components/Login/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/citycard' element={<Citycard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboardadmin' element={<Dashboardadmin />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/member' element={<Membar />} />
        <Route path='/meeting' element={<Meeting />} />
        <Route path='/project' element={<Project />} />
        <Route path='/inventory' element={<Inventory />} />
        <Route path='/setting' element={<Setting />} />
        <Route path='/collab' element={<Collab />} />
      </Routes>
    </Router>
  );
}

export default App;
