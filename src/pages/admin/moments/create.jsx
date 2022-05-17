import MomentForm from './form';

const AdminMomentCreate = () => {

    return (
        <>
            <h2>Ajouter un moment</h2>
            <MomentForm edit={false} />
        </>
    );
};

export default AdminMomentCreate;