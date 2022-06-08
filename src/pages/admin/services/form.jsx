import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const ServiceForm = ({ edit, item }) => {

    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const { handleSubmit, control } = useForm();

    const onSubmit = async (data) => {

        // Instanciate new FormData for multipart form (file upload).
        const fd = new FormData();
        fd.append("nom", data.nom);
        fd.append("lien", data.lien);
        fd.append("description", data.description);
        // Get file DOM element.
        const file = document.getElementById("pastille");
        // If new file, send file to FormData (Multer will use it).
        if (file.files[0]) {
            fd.append("pastille", file.files[0]);
        }

        if (edit) {
            //// PUT.
            if (file.files[0]) {
                // If new file.
                fd.append("fileToDelete", item.pastille);
            } else {
                // If no new file.
                fd.append("fileToKeep", item.pastille);
            }
            // Request.
            await axios.put(`${process.env.REACT_APP_BACK_URL}/api/body/service/${item.id}`, fd, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
                // Redirection.
                .then(() => { navigate('/admin/services'); });
        } else {
            //// POST.
            await axios.post(`${process.env.REACT_APP_BACK_URL}/api/body/service`, fd, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
                .then(() => { navigate('/admin/services'); });
        }
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
                        defaultValue={item ? item.nom : ""}
                        rules={{ required: true }}
                        render={({ field }) => <TextField
                            label="Nom"
                            value={field.value}
                            variant="filled"
                            fullWidth
                            margin={'normal'}
                            {...field}
                        />}
                    />
                    <Controller
                        name="lien"
                        control={control}
                        defaultValue={item ? item.lien : ""}
                        rules={{ required: true }}
                        render={({ field }) => <TextField
                            label="Lien YouCanBook.me"
                            value={field.value}
                            variant="filled"
                            fullWidth
                            margin={'normal'}
                            {...field}
                        />}
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
                    <Controller
                        name="pastille"
                        control={control}
                        rules={{ required: false }}
                        render={({ field }) => <TextField
                            id='pastille'
                            type='file'
                            label="Pastille"
                            variant="filled"
                            fullWidth
                            margin={'normal'}
                            {...field}
                        />
                        }
                    />
                    <div>
                        {item && <img width='200' src={`${process.env.REACT_APP_BACK_URL}/pastilles/services/${item.pastille}`} alt={item.pastille} />}
                    </div>
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