import './navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <p className="headerText">Logo</p>
      </div>
      <div className="logo"></div>
      <div className="menu">
        <div className="menu-items">
          <p className="headerText">About</p>
          <p className="headerText">Pricing</p>
          <p className="headerText">Review</p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
