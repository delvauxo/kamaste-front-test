import { Box, Container, CssBaseline } from '@mui/material';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import './App.css';
import Footer from './containers/footer';
import Header from './containers/header';
import HeaderAdmin from './containers/header/admin';
import { appRouteBody } from './routes';

function App() {
  const routes = useRoutes(appRouteBody);
  const user = useSelector(state => state.user);

  return (<>
    <CssBaseline />
    <Box display='flex' minHeight='100vh' flexDirection='column'>
      {user.isAdmin ? <HeaderAdmin /> : <Header />}
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
