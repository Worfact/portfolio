import { Link } from 'react-router-dom';
import './styles.scss';

function GridLink() {
  return (
    <div className="grid-link">
      <ul className="grid-link-list">
        <Link className="grid-link-list-item" to="/competences">compétences</Link>
        <Link className="grid-link-list-item" to="/projets">projets</Link>
        <Link className="grid-link-list-item" to="/passions">passions</Link>
        <Link className="grid-link-list-item" to="/contact">contact</Link>
      </ul>
    </div>
  );
}

export default GridLink;
