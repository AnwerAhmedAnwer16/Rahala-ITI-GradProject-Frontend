import React from 'react';

const Button = ({
  text,
  onClick,
  icon = null,
  variant = "primary",
  fullWidth = false,
}) => {
  const baseClasses =
    "btn fw-semibold rounded-pill px-3 py-1 btn-sm d-flex align-items-center justify-content-center gap-2";

  // ألوان مخصصة حسب التصميم
  const variants = {
    primary: {
      backgroundColor: "#4C6A4C", // أخضر عميق
      color: "#fff",
    },
    secondary: {
      backgroundColor: "#C8A951", // ذهبي
      color: "#fff",
    },
    cream: {
      backgroundColor: "#F9F5E7", // كريمي
      color: "#4C6A4C",
    },
  };

  const styles = {
    ...variants[variant],
    width: fullWidth ? "100%" : "auto",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "PointerEvent",
    width: "100%",
    transition: "background 0.3s ease",
  };

  return (
    <button
      className={baseClasses}
      style={styles}
      onClick={onClick}
    >
      {icon && <i className={`bi ${icon}`}></i>}
      {text}
    </button>
  );
};

export default Button;
