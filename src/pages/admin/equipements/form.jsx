import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const EquipementForm = ({ edit, item }) => {

    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const { handleSubmit, control } = useForm();

    const onSubmit = async (data) => {

        // Instanciate new FormData for multipart form (file upload).
        const fd = new FormData();
        fd.append("nom", data.nom);
        fd.append("description", data.description);
        // Get file DOM element.
        const pastille = document.getElementById("pastille");
        const image = document.getElementById("image");
        // If new file, send file to FormData (Multer will use it).
        if (pastille.files[0]) {
            fd.append("pastille", pastille.files[0]);
        }
        if (image.files[0]) {
            fd.append("image", image.files[0]);
        }

        if (edit) {
            //// PUT.
            if (pastille.files[0]) {
                // If new file.
                fd.append("fileToDelete", item.pastille);
            } else {
                // If no new file.
                fd.append("fileToKeep", item.pastille);
            }
            if (image.files[0]) {
                // If new file.
                fd.append("fileImageToDelete", item.image);
            } else {
                // If no new file.
                fd.append("fileImageToKeep", item.image);
            }
            // Request.
            await axios.put(`${process.env.REACT_APP_BACK_URL}/api/body/equipement/${item.id}`, fd, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
                // Redirection.
                .then(() => { navigate('/admin/equipements'); });
        } else {
            //// POST.
            await axios.post(`${process.env.REACT_APP_BACK_URL}/api/body/equipement`, fd, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
                .then(() => { navigate('/admin/equipements'); });
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
                        rules={{ required: true }}
                        defaultValue={(item ? item.nom : '')}
                        render={({ field }) => <TextField
                            label="Nom"
                            variant="filled"
                            fullWidth
                            margin={'normal'}
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
                    <Controller
                        name="image"
                        control={control}
                        rules={{ required: false }}
                        render={({ field }) => <TextField
                            id='image'
                            type='file'
                            label="Image description"
                            variant="filled"
                            fullWidth
                            margin={'normal'}
                            {...field}
                        />
                        }
                    />
                    <div>
                        {item && <img width='200' src={`${process.env.REACT_APP_BACK_URL}/pastilles/equipements/${item.pastille}`} alt={item.pastille} />}
                        {item && <img width='200' src={`${process.env.REACT_APP_BACK_URL}/equipements/images/${item.image}`} alt={item.image} />}
                    </div>
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