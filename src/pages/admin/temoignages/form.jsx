import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const TemoignageForm = ({ edit, item }) => {

    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const { handleSubmit, control } = useForm();

    const onSubmit = async (data) => {

        if (edit) {
            //// PUT.
            // Request.
            await axios.put(`${process.env.REACT_APP_BACK_URL}/api/body/temoignage/${item.id}`, data, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
                // Redirection.
                .then(() => { navigate('/admin/temoignages'); });
        } else {
            //// POST.
            await axios.post(`${process.env.REACT_APP_BACK_URL}/api/body/temoignage`, data, {
                headers: { Authorization: 'Bearer ' + user.token }
            })
                .then(navigate('/admin/temoignages'));
        }

    };

    if (item === undefined && edit === true) {
        return <h2>Chargement...</h2>;
    } else {
        return (
            <>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="client"
                        control={control}
                        defaultValue={item ? item.client : ""}
                        rules={{ required: true }}
                        render={({ field }) => <TextField
                            label="Client"
                            value={field.value}
                            variant="filled"
                            fullWidth
                            margin={'normal'}
                            {...field}
                        />}
                    />
                    <Controller
                        name="texte"
                        control={control}
                        defaultValue={item ? item.texte : ""}
                        rules={{ required: true }}
                        render={({ field }) => <TextField
                            label="Texte"
                            value={field.value}
                            variant="filled"
                            minRows={3}
                            maxRows={Infinity}
                            multiline
                            fullWidth
                            margin={'normal'}
                            {...field}
                        />}
                    />
                    <Link to={'/admin/temoignages'}>
                        <Button sx={{ mt: 2, textTransform: 'none' }} variant="contained" color='error'>Annuler</Button>
                    </Link>
                    <Button sx={{ mt: 2, mx: 2, textTransform: 'none' }} variant="contained" type="submit">Valider</Button>
                </form>

            </>
        );
    }
};

export default TemoignageForm;