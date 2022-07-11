import { Container } from '@mui/material';
import ContactForm from './form';

const ContactPage = () => {

    return (
        <>
            <Container>
                <div className="component-title">
                    <h3>Contactez - nous</h3>
                </div>
                <div>
                    <ContactForm />
                </div>
            </Container>
        </>
    );
};

export default ContactPage;