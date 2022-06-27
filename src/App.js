import { Box, CssBaseline } from '@mui/material';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import './App.scss';
import Footer from './containers/footer';
import Header from './containers/header';
import HeaderAdmin from './containers/header/admin';
import { appRoute } from './routes';
import { paths } from './routes/paths';

function App() {

  const routes = useRoutes(appRoute);
  const user = useSelector(state => state.user);
  const [classPage, setClassPage] = useState('unknown');

  // Get URL path.
  const url = window.location.pathname;

  // Get the page name.
  useEffect(() => {
    for (const path of paths) {
      if (url === path.path) {
        setClassPage(path.className);
      }
    }
  }, [url]);



  return (<>
    <CssBaseline />
    <Box display='flex' minHeight='100vh' flexDirection='column' className={`app ${classPage}`}>
      {user.isAdmin && <HeaderAdmin />}
      {(url !== '/' && (user.isAdmin === null || user.isAdmin === false)) && <Header />}
      <Box flex={1}>
        <main>
          {routes}
        </main>
      </Box>
      <Footer />
    </Box>
  </>);
}

export default App;
