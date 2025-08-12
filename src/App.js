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
import HomePage from './pages/HomePage/Home.js';
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Auth/Login.js";
import Register from "./pages/Auth/Register.js";
import TripDetails from "./pages/TripDetails/TripDetails.js";


function App() {

    const isAuthenticated = localStorage.getItem("user"); // لو فيه يوزر مسجل


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

  const tripsData = [
  {
    id: 1,
    title: "Siwa Oasis Adventure",
    description: "A wonderful trip to the heart of Siwa Oasis.",
    location: "Siwa, Egypt",
    date: "2025-08-20",
    tag: "Adventure",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    likes: 10,
    comments: [
      { author: "Ali", text: "Amazing trip!", likes: 2, replies: [] },
      { author: "Sara", text: "I want to join!", likes: 1, replies: [] }
    ]
  },
  {
    id: 2,
    title: "Dahab Diving Experience",
    description: "Discover the beauty of the Red Sea in Dahab.",
    location: "Dahab, Egypt",
    date: "2025-09-05",
    tag: "Diving",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    likes: 5,
    comments: []
  }
];

  return (
    <BrowserRouter>
      <Routes>
        {/* أول ما يفتح يروح على Register */}
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* الهوم */}
        <Route
          path="/home"
          element={
            isAuthenticated ? <HomePage /> : <Navigate to="/login" />
          }
        />
        <Route path="/trip/:id" element={<TripDetails tripsData={tripsData} />} />
      </Routes>
    </BrowserRouter>
  );

  

};

export default App;