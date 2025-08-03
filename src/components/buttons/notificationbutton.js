import React from 'react';

const NotificationButton = ({ 
    count = 0,
    onClick,
    tooltip = "Notifications",
    hideBadge = false }) => {
        
  return (
    <button
      className="btn position-relative rounded-circle d-flex align-items-center justify-content-center"
      style={{
        width: '36px',
        height: '36px',
        backgroundColor: '#F9F5E7',
        color: '#4C6A4C',
        border: 'none',
        padding: 0,
      }}
      onClick={onClick}
      title={tooltip}
    >
      <i className="bi bi-bell-fill" style={{ fontSize: '16px' }}></i>

      {/* عرض الـ badge فقط إذا كانت موجودة ولم تُخفى */}
      {count > 0 && !hideBadge && (
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          style={{ fontSize: '0.6rem' }}
        >
          {count}
        </span>
      )}
    </button>
  );
};

export default NotificationButton;
