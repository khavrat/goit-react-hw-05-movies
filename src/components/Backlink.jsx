import { Link } from '../components/BackLink.styled';

const BackLink = ({ to, children }) => {
  return <Link to={to}>{children}</Link>;
};

export default BackLink;
