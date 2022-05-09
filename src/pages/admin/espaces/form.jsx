import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const EspaceForm = ({ item, edit }) => {

    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {

        let promise;

        if (edit) {
            // PUT
            promise = axios.put(`${process.env.REACT_APP_BACK_URL}/api/espace/${item.id}`, data, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            });
        } else {
            // POST
            promise = axios.post(`${process.env.REACT_APP_BACK_URL}/api/espace`, data, {
                headers: {
                    'Authorization': 'Bearer ' + user.token
                }
            });
        }

        // Redirect.
        promise.then(
            () => { navigate('/admin/espaces'); }
        );
    };

    if (item === undefined && edit) {
        return (<h2>Chargement...</h2>);
    } else {
        return (
            <>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <section>
                        <Controller
                            name='nom'
                            control={control}
                            defaultValue={edit === false ? "" : item.nom}
                            render={({ field: { onChange, value } }) => <TextField
                                label="Nom de l'espace"
                                value={value}
                                onChange={onChange}
                                variant="filled"
                                fullWidth
                            />}
                        />
                    </section>
                    <Link to={'/admin/espaces'}>
                        <Button sx={{ mt: 2 }} variant="contained" color='error'>Annuler</Button>
                    </Link>
                    <Button sx={{ mt: 2, mx: 2 }} variant="contained" type="submit">Valider</Button>
                </form>
            </>
        );
    }
};

export default EspaceForm;