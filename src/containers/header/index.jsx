import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
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
            <AppBar position='static'>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2 }}
                        component={NavLink}
                        to='/'
                    >
                        <HomeIcon />
                    </IconButton>
                    <Box sx={{ display: 'flex', flexGrow: 1, gap: '20px' }}>
                        <Typography color='inherit' variant='h6' component={NavLink} to='/body/equipements' sx={{ textDecoration: 'none' }}>
                            Équipements
                        </Typography>
                        <Typography color='inherit' variant='h6' component={NavLink} to='/body/about' sx={{ textDecoration: 'none' }}>
                            About
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