import { Container } from '@mui/material';

const Dicton = ({ container, dicton }) => {

    return container ? (
        <Container className='mt-lg'>
            <div className='rounded-bg-white'>
                {dicton && <p className='font-brittany secondary-color txt-lg'>{dicton}</p>}
            </div>
        </Container>
    ) : (
        <div className='rounded-bg-white mt-lg'>
            {dicton && <p className='font-brittany secondary-color txt-lg'>{dicton}</p>}
        </div>
    );
};

export default Dicton;