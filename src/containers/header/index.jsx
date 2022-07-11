import { AppBar, Button, Container, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from '../../store/actions/user-action';
import style from './_header.module.scss';
import classNames from 'classnames';

const Header = () => {

    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <header>
            <AppBar position='static' sx={{ bgcolor: "#657ead" }}>
                <Toolbar sx={{ minHeight: 36, height: 100 }}>
                    <Box sx={{ position: 'absolute' }}>
                        <Link to={'/'}>
                            <img src="/images/logo_k.png" alt="Kamaste logo" width={75} />
                        </Link>
                    </Box>
                    <Container>
                        <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', gap: '20px', ml: 3 }}>
                            <NavLink className={classNames(style.fontBtny, style.navLink)} to='/body' end>
                                <span>Body</span>
                            </NavLink>
                            <NavLink className={classNames(style.fontBtny, style.navLink)} to='/body/about'>
                                <span>Qui sommes-nous ?</span>
                            </NavLink>
                            <NavLink className={classNames(style.fontBtny, style.navLink)} to='/body/moments'>
                                <span>Moments</span>
                            </NavLink>
                            <NavLink className={classNames(style.fontBtny, style.navLink)} to='/body/equipements'>
                                <span>Équipements</span>
                            </NavLink>
                            <NavLink className={classNames(style.fontBtny, style.navLink)} to='/body/services'>
                                <span>Services</span>
                            </NavLink>
                            <NavLink className={classNames(style.fontBtny, style.navLink)} to='/body/reserver'>
                                <span>Réserver</span>
                            </NavLink>
                            <NavLink className={classNames(style.fontBtny, style.navLink)} to='/body/contact'>
                                <span>Contact</span>
                            </NavLink>
                        </Box>
                    </Container>
                    {
                        !user.token ? (<>
                            <Box className='d-none'>
                                <Button color='inherit' component={NavLink} to='/register'>Register</Button>
                                <Button color='inherit' component={NavLink} to='/login'>Login</Button>
                            </Box>
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