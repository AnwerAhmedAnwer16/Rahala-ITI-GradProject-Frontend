import React from 'react';
import UserCard from './components/userCard/userCard.js';
import './components/userCard/userCard.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import Navbar from './components/navBar/navBar.js';
import { Routes, Route, Navigate } from "react-router-dom";
import Explore from './pages/Explore.js';
import Home from './pages/Home.js';
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Auth/Login.js";
import Register from "./pages/Auth/Register.js";



function App() {

  const [notifications, setNotifications] = useState([
    { message: 'رحلة جديدة متاحة الآن!', read: false },
    { message: 'تم قبول طلب انضمامك', read: false },
    { message: 'تم إلغاء حجزك', read: true }
  ]);

  const handleNotificationClick = (index) => {
    const updated = [...notifications];
    updated[index].read = true;
    setNotifications(updated);
  };



  const user = {
    avatar: 'https://i.pravatar.cc/150?img=12',
    username: 'Nada Mohey',
    title: 'Frontend Developer',
    location: 'Cairo, Egypt',
    gender: 'Female',
    bio: 'أحب تطوير واجهات المستخدم وتجربة المستخدم، وأسعى لتقديم تصاميم تفاعلية ومريحة.',
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* أول ما يفتح يروح على Register */}
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );

  

};

export default App;