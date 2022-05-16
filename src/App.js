import { Box, Container, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Footer from './containers/footer';
import Header from './containers/header';
import HeaderAdmin from './containers/header/admin';
import { appRoute } from './routes';

function App() {
  const routes = useRoutes(appRoute);
  const user = useSelector(state => state.user);

  const url = window.location.pathname;
  console.log(url);
  console.log(user);
  return (<>
    <CssBaseline />
    <Box display='flex' minHeight='100vh' flexDirection='column'>
      {user.isAdmin && <HeaderAdmin />}
      {(url !== '/' && (user.isAdmin === null || user.isAdmin === false)) && <Header />}
      <Box flex={1}>
        <main>
          <Container >
            {routes}
          </Container>
        </main>
      </Box>
      <Footer />
    </Box>
  </>);
}

export default App;
