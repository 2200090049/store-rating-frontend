import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import StoreDetails from './pages/StoreDetails';
import AddStore from './pages/AddStore';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store/:id" element={<StoreDetails />} />
            <Route path="/add-store" element={<AddStore />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
