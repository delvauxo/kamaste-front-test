import { Container } from '@mui/material';

const Dicton = ({ container, dicton }) => {

    return container ? (
        <Container className='mt-lg'>
            <div className='dicton rounded-bg-white'>
                {dicton && <p className='font-brittany secondary-color txt-xl'>{dicton}</p>}
            </div>
        </Container>
    ) : (
        <div className='dicton rounded-bg-white mt-xl'>
            {dicton && <p className='font-brittany secondary-color txt-lg'>{dicton}</p>}
        </div>
    );
};

export default Dicton;