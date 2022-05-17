import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../store/actions/user-action';
import style from './header.module.css';

const Header = () => {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <header>
            <AppBar position='static' sx={{ bgcolor: "#657ead" }}>
                <Toolbar sx={{ minHeight: 36, height: 100 }}>
                    <Link to={'/'}>
                        <img src="/images/logo.png" alt="Kamaste logo" width={75} />
                    </Link>
                    <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', gap: '20px', ml: 3 }}>
                        <Typography color='inherit' variant='h6' component={NavLink} to='/body/about' sx={{ textDecoration: 'none' }}>
                            Qui sommes-nous ?
                        </Typography>
                        <Typography color='inherit' variant='h6' component={NavLink} to='/body/moments' sx={{ textDecoration: 'none' }}>
                            Moments
                        </Typography>
                        <Typography color='inherit' variant='h6' component={NavLink} to='/body/equipements' sx={{ textDecoration: 'none' }}>
                            Équipements
                        </Typography>
                        <Typography color='inherit' variant='h6' component={NavLink} to='/body/services' sx={{ textDecoration: 'none' }}>
                            Services
                        </Typography>
                        <Typography color='inherit' variant='h6' component={NavLink} to='/body/agenda' sx={{ textDecoration: 'none' }}>
                            Agenda
                        </Typography>
                        <Typography color='inherit' variant='h6' component={NavLink} to='/body/contact' sx={{ textDecoration: 'none' }}>
                            Contact
                        </Typography>
                    </Box>
                    {
                        !user.token ? (<>
                            <Button color='inherit' component={NavLink} to='/register'>Register</Button>
                            <Button color='inherit' component={NavLink} to='/login'>Login</Button>
                        </>) : (
                            <>
                                <Button color='inherit' component='div'>
                                    <Link to={'/admin'} className={style.adminLink}>Dashboard</Link>
                                </Button>
                                <Button color='inherit' component='div' onClick={() => {
                                    dispatch(userLogout());
                                    navigate('/');
                                }}>Logout</Button>
                            </>
                        )
                    }
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default Header;