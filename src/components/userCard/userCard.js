import React from 'react';
const UserCard = ({ user }) => {
 
  return (
    <div className="user-card-container d-flex justify-content-center align-items-center position-relative" style={{ zIndex: 1 }}>
  <div className="card user-card text-white p-4 rounded-4 shadow-lg position-relative" style={{
    maxWidth: '400px',
    background: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    zIndex: 1,
  }}>
    {/* صورة الغلاف */}
        <div className="d-flex justify-content-center mb-3">
  <img
    src={user.avatar}
    alt="avatar"
    className="rounded-circle border border-white shadow"
    style={{
      width: '110px',
      height: '110px',
      objectFit: 'cover',
      marginTop: '-60px',
      backgroundColor: '#fff',
    }}
  />
</div>

        {/* معلومات المستخدم الأساسية */}
<div className="text-white text-center mt-3 mb-2">
  <h5 className="mb-1 fw-bold">{user.username}</h5>
  <p className="mb-2 text-light small">{user.title}</p>

  <div className="d-flex justify-content-center gap-3 text-white-50 small">
    <div className="d-flex align-items-center gap-1">
      <i className="bi bi-geo-alt-fill"></i>
      <span>{user.location}</span>
    </div>
    <div className="d-flex align-items-center gap-1">
      <i className="bi bi-gender-ambiguous"></i>
      <span>{user.gender}</span>
    </div>
  </div>
</div>

        {/* النصوص */}
        <div className="text-section">
          <h6 className="text-success">{user.quoteTitle}</h6>
          <p className="small mb-1">{user.bio}</p>

          
          
        </div>
      </div>
    </div>
  

        
  );
};

export default UserCard;
