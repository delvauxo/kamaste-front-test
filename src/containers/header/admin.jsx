import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import HomeIcon from '@mui/icons-material/Home';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../store/actions/user-action';
import style from './header.module.css';

const HeaderAdmin = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <header>
            <AppBar position='static' sx={{ bgcolor: "darkRed" }}>
                <Toolbar>
                    <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{ mr: 2 }}
                        component={NavLink}
                        to='/admin'
                    >
                        <HomeIcon />
                    </IconButton>
                    <Box sx={{ display: 'flex', flexGrow: 1, gap: '20px' }}>
                        <Typography color='inherit' variant='h6' component={NavLink} to='/admin/espaces' sx={{ textDecoration: 'none' }}>
                            Espaces
                        </Typography>
                        <Typography color='inherit' variant='h6' component={NavLink} to='/admin/moments' sx={{ textDecoration: 'none' }}>
                            Moments
                        </Typography>
                        <Typography color='inherit' variant='h6' component={NavLink} to='/admin/equipements' sx={{ textDecoration: 'none' }}>
                            Équipements
                        </Typography>
                        <Typography color='inherit' variant='h6' component={NavLink} to='/admin/services' sx={{ textDecoration: 'none' }}>
                            Services
                        </Typography>
                        <Typography color='inherit' variant='h6' component={NavLink} to='/admin/temoignages' sx={{ textDecoration: 'none' }}>
                            Témoignages
                        </Typography>
                    </Box>
                    <Button color='inherit' component='div'>
                        <Link to={'/admin'} className={style.adminLink}>{user.pseudo}</Link>
                    </Button>
                    <Button color='inherit' component='div' onClick={() => {
                        dispatch(userLogout());
                        navigate('/');
                    }}>Logout</Button>
                </Toolbar>
            </AppBar>
        </header>
    );
};

export default HeaderAdmin;