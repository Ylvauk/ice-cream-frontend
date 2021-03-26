import { Link } from 'react-router-dom';

const FlavorItem = ({ flavor }) => (
  <li>
    <Link to={`/flavors/${flavor._id}`}>{flavor.flavor}</Link>
  </li>
);

export default FlavorItem;
