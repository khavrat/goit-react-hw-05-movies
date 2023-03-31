import { Link } from './BackLink.styled';
import PropTypes from 'prop-types';

const BackLink = ({ to, children }) => {
  return <Link to={to}>{children}</Link>;
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired
}
export default BackLink;
