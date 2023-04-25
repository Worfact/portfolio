import './styles.scss';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

function Page({ children }) {
  const location = useLocation().pathname.substring(1);
  const className = `page page-${location === '' ? 'home' : location}`;

  return (
    <div className={className}>
      {children}
    </div>
  );
}

export default Page;

Page.propTypes = {
  children: PropTypes.any.isRequired,
};
