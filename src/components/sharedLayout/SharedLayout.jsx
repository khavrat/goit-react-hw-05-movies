import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import LoadingView from '../loading/LoadingView';
import {
  Logo,
  Header,
  LogoText,
  Container,
  NavList,
  Link,
} from './SharedLayout.styled';
import { FcFilmReel } from 'react-icons/fc';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <FcFilmReel size="40" role="img" aria-label="movie icon" />
          <LogoText>FILM</LogoText>
        </Logo>
        <nav>
          <NavList>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </NavList>
        </nav>
      </Header>
      <Suspense fallback={<LoadingView size={10} />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default SharedLayout;
