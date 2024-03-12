import React from 'react';
import { BrowserRouter as Router, Route,Routes, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import Profile from './components/Profile';
import SelectDomainSlots from './components/SelectDomainSlots';
import AllocationDetails from './components/AllocationDetails';
import MarksEntry from './components/MarksEntry';

function App() {
  return (
      <div>
        {/* <NavBar /> */}
        <div className="main-content">
          <Routes>
            <Route path="/" exact component={Welcome} />
            <Route path="profile" element={<Profile/>} />
            <Route path="/select-domain-slots" component={<SelectDomainSlots/>} />
            <Route path="/allocation-details" component={<AllocationDetails/>} />
            <Route path="/marks-entry" component={MarksEntry} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
