import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <a
          href="tel:+442055555555"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <p>+44 (0) 20 5555 5555</p>
        </a>
      </div>
      <Link style={{ textDecoration: "none" }} to="/">
        <h1>Veloce Virdi</h1>
      </Link>
      <div className="header-right">
        <div>12-150 Main Street</div>
        <div> London SW15 3WC</div>
      </div>
    </div>
  );
};

export default Header;
