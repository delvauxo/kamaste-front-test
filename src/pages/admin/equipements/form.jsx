import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const EquipementForm = ({ edit, item }) => {

    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        let promise;
        if (edit) {
            // PUT.
            promise = axios.put(`${process.env.REACT_APP_BACK_URL}/api/body/equipement/${item.id}`, data, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
        } else {
            // POST.
            promise = axios.post(`${process.env.REACT_APP_BACK_URL}/api/body/equipement`, data, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            });
        }
        promise.then(() => { navigate('/admin/equipements'); });
    };


    if (item === undefined && edit === true) {
        return <h2>Chargement...</h2>;
    } else {
        return (
            <>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="nom"
                        control={control}
                        rules={{ required: true }}
                        defaultValue={(item ? item.nom : '')}
                        render={({ field }) => <TextField
                            label="Nom"
                            variant="filled"
                            fullWidth
                            {...field}
                        />
                        }
                    />
                    <Controller
                        name="description"
                        control={control}
                        defaultValue={item ? item.description : ""}
                        rules={{ required: true }}
                        render={({ field }) => <TextField
                            label="Description"
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
                    <Link to={'/admin/equipements'}>
                        <Button sx={{ mt: 2, textTransform: 'none' }} variant="contained" color='error'>Annuler</Button>
                    </Link>
                    <Button sx={{ mt: 2, mx: 2, textTransform: 'none' }} variant="contained" type="submit">Valider</Button>
                </form>
            </>
        );
    }

};

export default EquipementForm;