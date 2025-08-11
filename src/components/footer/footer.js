import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* اللوجو و الوصف */}
        <div className="footer-about">
          <h2 className="footer-logo">Rahala</h2>
          <p>
            A platform for travelers and explorers to share their journeys,
            discover new places, and build a unique travel community.
          </p>
        </div>

        {/* روابط سريعة */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/explore">Explore</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        {/* تواصل معنا */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* حقوق النشر */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Rahala | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
