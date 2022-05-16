import EspacesList from '../../components/espaces-list/espaces-list';
// import style from './home.module.css';

const HomePage = () => {

    return (
        <>
            {/* <h1>Kamaste</h1> */}
            <img id='home-logo' src="/images/logo.png" alt="Kamaste logo" />
            <div id='home-img-container'>
                <EspacesList />
            </div>
        </>
    );
};

export default HomePage;