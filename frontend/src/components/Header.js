import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div>
        <p>+44 (0) 20 5555 5555</p>
      </div>
      <Link style={{ textDecoration: "none" }} to="/">
        <h1>Veloce Virdi</h1>
      </Link>
      <div className="header-right">
        <div>123-150 Main Street</div>
        <div>London SW15 3WC</div>
      </div>
    </div>
  );
};

export default Header;
