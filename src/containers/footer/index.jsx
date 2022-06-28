import { Box } from '@mui/material';

const Footer = () => {
    return (
        <Box component='footer' textAlign='center'>
            <div className='banner border-effect-blue'>
                <a href="https://www.facebook.com/Kamaste.Wellness.body.mind" target="_blank" rel="noopener noreferrer">
                    <img src="/images/icon_facebook.png" alt="Facebook logo" />
                </a>
                <span className='txt-md'>Suivez-nous</span>
                <a href="https://www.instagram.com/Kamaste.Wellness.body.mind/" target="_blank" rel="noopener noreferrer">
                    <img src="/images/icon_instagram.png" alt="Instagram logo" />
                </a>
            </div>
            <div>
                <p><span>Kamaste © Tous droits réservés</span></p>
                <p>
                    <span>
                        <a href="https://www.kamaste.be/cgv.pdf" target="_blank" rel="noopener noreferrer">Conditions générales de vente</a>
                    </span>
                    <span> - </span>
                    <span>
                        <a href="https://www.kamaste.be/roi.pdf" target="_blank" rel="noopener noreferrer">Politique de confidentialité des données et mentions légales</a>
                    </span>
                </p>
            </div>
        </Box>
    );
};

export default Footer;