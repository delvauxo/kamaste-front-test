import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const ServiceForm = ({ item, edit }) => {

    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {

        let promise;

        if (edit) {
            // PUT
            promise = axios.put(`${process.env.REACT_APP_BACK_URL}/api/body/service/${item.id}`, data, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            });
        } else {
            // POST
            promise = axios.post(`${process.env.REACT_APP_BACK_URL}/api/body/service`, data, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            });
        }

        // Redirect.
        promise.then(
            () => { navigate('/admin/services'); }
        );


    };

    if (item === undefined && edit === true) {
        return <h2>Chargement...</h2>;
    } else {
        return (
            <>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <section>
                        <Controller
                            name="nom"
                            control={control}
                            defaultValue={item ? item.nom : ""}
                            rules={{ required: true }}
                            render={({ field }) => <TextField
                                label="Nom"
                                value={field.value}
                                variant="filled"
                                fullWidth
                                {...field}
                            />}
                        />
                    </section>
                    <Link to={'/admin/services'}>
                        <Button sx={{ mt: 2, textTransform: 'none' }} variant="contained" color='error'>Annuler</Button>
                    </Link>
                    <Button sx={{ mt: 2, mx: 2, textTransform: 'none' }} variant="contained" type="submit">Valider</Button>
                </form>
            </>
        );
    }
};

export default ServiceForm;