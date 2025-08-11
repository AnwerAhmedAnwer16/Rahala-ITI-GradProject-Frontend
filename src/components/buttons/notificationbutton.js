import React, { useState } from 'react';

const NotificationButton = ({
  notifications = [
    { id: 1, text: "رحلة جديدة إلى واحة سيوة 🌴", read: false },
    { id: 2, text: "خصم 20% على رحلة دهب 🏝️", read: true },
    { id: 3, text: "تمت الموافقة على حجزك 🚐", read: false },],
  onNotificationClick,
  tooltip = 'Notifications'
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.read).length;

  const toggleList = () => setIsOpen(!isOpen);

  return (
    <div className="position-relative">
      {/* الزرار */}
      <button
        className="btn position-relative rounded-circle d-flex align-items-center justify-content-center"
        style={{
          width: '36px',
          height: '36px',
          backgroundColor: '#F9F5E7',
          color: '#4C6A4C',
          border: 'none',
          padding: 0
        }}
        onClick={toggleList}
        title={tooltip}
      >
        <i className="bi bi-bell-fill" style={{ fontSize: '16px' }}></i>

        {unreadCount > 0 && (
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            style={{ fontSize: '0.6rem' }}
          >
            {unreadCount}
          </span>
        )}
      </button>

      {/* القائمة */}
      {isOpen && (
        <div
          className="position-absolute end-0 mt-2 p-2 rounded shadow"
          style={{
            width: '250px',
            backgroundColor: '#fff',
            zIndex: 1000
          }}
        >
          {notifications.length === 0 ? (
            <p className="text-muted small m-0">No notifications</p>
          ) : (
            notifications.map((n, i) => (
              <div
                key={i}
                className={`p-2 mb-1 rounded ${n.read ? 'bg-light text-muted' : 'bg-warning bg-opacity-25'}`}
                style={{ cursor: 'pointer' }}
                onClick={() => onNotificationClick(i)}
              >
                <small>{n.text}</small>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationButton;
