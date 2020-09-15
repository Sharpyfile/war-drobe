import React from 'react';
import './App.css';
import MainFrame from './components/MainFrame';
import TopNavbar from './components/TopNavbar';
import FreeSpace from './components/FreeSpace';
import Sidebar from './components/Sidebar';
import BottomBar from './components/BottomBar';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router>
    <div className="grid-container">
      <TopNavbar />
      <FreeSpace />
      <MainFrame />
      <Sidebar />
      <BottomBar />
    </div>
    </Router>
    
  );
}

export default App;
