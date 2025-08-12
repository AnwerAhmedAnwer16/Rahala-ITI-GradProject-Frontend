// src/components/buttons/SocialButton.jsx
const SocialButton = ({ icon, text, onClick, bgColor, textColor }) => {
  return (
    <button
      className="w-full flex items-center gap-2 px-4 py-2 rounded font-medium"
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      <img src={icon} alt="icon" width="20" />
      {text}
    </button>
  );
};

export default SocialButton;