import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMainContent';

const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'sans-serif' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
};

export default App;

