import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <a href="/">
            <img className="logo-img" src="/M&M logo4.png" alt="Logo" />
          </a>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
