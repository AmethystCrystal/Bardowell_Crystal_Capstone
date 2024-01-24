import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <Link to="/TravelExperiences">
          <h1>Travel Log</h1>
        </Link>
        <Link to='/TravelExperiences/login'>
          <div>Login</div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
