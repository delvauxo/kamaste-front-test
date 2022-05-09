import EspacesList from '../../components/espaces-list/espaces-list';
import style from './home.module.css';

const HomePage = () => {
    return (
        <>
            <h1>Accueil</h1>
            <p>Bienvenue sur notre site</p>
            <EspacesList />
        </>
    );
};

export default HomePage;