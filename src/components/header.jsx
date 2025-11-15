import '/header.css'

export function  HeaderComponent(){
  return(
    <>
       <div className="navbar">
      <img src="/download (12).png" alt="Logo" className="logo" />

      <nav className="nav-links">
        <Link to="/about">About Us</Link>
        <Link to="/solutions">Our Solutions</Link>
        <Link to="/invest">Invest</Link>
        <Link to="/login">Login</Link>
        <Link to="/apply">Apply Now</Link>
      </nav>
    </div>
    </>
  );
}