import { Container } from '@mui/material';
import EspacesList from '../../components/espaces-list/espaces-list';
// import style from './home.module.css';

const HomePage = () => {

    return (
        <>
            <Container>
                <img id='home-logo' src="/images/logo.png" alt="Kamaste logo" />
                <div id='home-img-container'>
                    <EspacesList />
                </div>
            </Container>
        </>
    );
};

export default HomePage;