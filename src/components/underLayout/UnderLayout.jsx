import { useLocation, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import LoadingView from '../loading/LoadingView';
import { Link, List } from './UnderLayout.styled';

const UnderLayout = () => {
  const location = useLocation();

  return (
    <>
      {' '}
      <List>
        <li>
          <Link to="cast" state={{ from: location }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
        </li>
      </List>
      <Suspense fallback={<LoadingView />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default UnderLayout;
