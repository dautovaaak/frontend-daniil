import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Messenger from './pages/Messenger';
import News from './pages/News';
import CustomerService from './pages/CustomerService';
import Friends from './pages/Friends';
import ChatSupport from './pages/ChatSupport';
import Blog from './pages/Blog';
import IvanIvanovProfile from './pages/IvanIvanovProfile';
import MariaSidorovaProfile from './pages/MariaSidorovaProfile';
import AlexeyPetrovProfile from './pages/AlexeyPetrovProfile';
import ElenaSydorovaProfile from './pages/ElenaSydorovaProfile';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ErrorBoundary from './components/ErrorBoundary';

import { auth } from './firebaseConfig';

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <div style={{ display: 'flex' }}>
          <Navbar /> {/* Добавляем компонент Navbar здесь */}
          <div style={{ flex: 1, padding: '20px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/messenger" element={<Messenger />} />
              <Route path="/news" element={<News />} />
              <Route path="/customer-service" element={<CustomerService />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/chat-support" element={<ChatSupport />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/profile/1" element={<IvanIvanovProfile />} />
              <Route path="/profile/2" element={<MariaSidorovaProfile />} />
              <Route path="/profile/3" element={<AlexeyPetrovProfile />} />
              <Route path="/profile/lena" element={<ElenaSydorovaProfile />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </div>
        </div>
      </ErrorBoundary>
      <Footer />
    </Router>
  );
}

export default App;
