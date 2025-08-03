import React from 'react';
import UserCard from './components/userCard/userCard.js';
import './components/userCard/userCard.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {

  const user = {
    avatar: 'https://i.pravatar.cc/150?img=12',
    username: 'Nada Mohey',
    title: 'Frontend Developer',
    location: 'Cairo, Egypt',
    gender: 'Female',
    bio: 'أحب تطوير واجهات المستخدم وتجربة المستخدم، وأسعى لتقديم تصاميم تفاعلية ومريحة.',
     
 
  };

  return (
    <div className="container d-flex justify-content-center">
      <UserCard user={user} />
    </div>
  );

  

};

export default App;