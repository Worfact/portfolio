import { NavLink } from 'react-router-dom';
import './styles.scss';

function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? 'hidden' : 'navlink')}
      >
        acceuil
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? 'hidden' : 'navlink')}
      >
        contact
      </NavLink>

      <NavLink
        to="/projets"
        className={({ isActive }) => (isActive ? 'hidden' : 'navlink')}
      >
        projets
      </NavLink>

      <NavLink
        to="/passions"
        className={({ isActive }) => (isActive ? 'hidden' : 'navlink')}
      >
        passions
      </NavLink>

      <NavLink
        to="/competences"
        className={({ isActive }) => (isActive ? 'hidden' : 'navlink')}
      >
        competences
      </NavLink>
    </div>
  );
}

export default NavBar;
