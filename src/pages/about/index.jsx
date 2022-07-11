import { Container } from '@mui/material';

const AboutPage = () => {
    return (<>
        <Container>
            <div className="component-title">
                <h3>Qui sommes nous ?</h3>
            </div>
            <div className='rounded-bg-white mt-lg'>
                <p className='font-chakra txt-sm secondary-color no-margin'>Kamaste est un espace de bien-être pour le corps et l’esprit où nous saluons le plaisir.</p>
                <p className='font-chakra txt-sm secondary-color'>Ce lieu est gorgé d’énergie ressourçante et bienfaisante, nous mettons tout notre cœur à titiller cette notion de plaisir chez chacun d’entre vous afin de nourrir et de développer bien-être, équilibre et élévation intérieure.</p>
                <p className='font-chakra txt-sm secondary-color'>Nous vous proposons un espace Wellness pour le corps et un espace Risingness individuel ou collectif pour l’esprit.</p>
                <p className='font-chakra txt-sm secondary-color no-margin'>Partagez-nous votre Rêve, notre Magie le rendra Réalité.</p>
            </div>
        </Container>
    </>);
};

export default AboutPage;