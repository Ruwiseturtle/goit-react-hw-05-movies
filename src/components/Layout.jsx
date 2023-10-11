import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Navigation } from './Layout.styled';

export const Layout = () => {
    return (
      <Container>
        <Header>
          <Navigation >
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </Navigation>
        </Header>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    );
}