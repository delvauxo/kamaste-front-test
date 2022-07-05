import { Button, TextField } from '@mui/material';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const MomentForm = ({ edit, item }) => {

    const navigate = useNavigate();
    const user = useSelector(state => state.user);
    const { handleSubmit, control } = useForm();

    const onSubmit = async (data) => {

        // Instanciate new FormData for multipart form (file upload).
        const fd = new FormData();
        fd.append("nom", data.nom);
        fd.append("lien", data.lien);
        fd.append("people", data.people);
        fd.append("hours", data.hours);
        fd.append("price", data.price);
        fd.append("description", data.description);
        // Get file DOM element.
        const pastille = document.getElementById("pastille");
        const image = document.getElementById("image"); // <------

        // If new file, send file to FormData (Multer will use it).
        if (pastille.files[0]) {
            fd.append("pastille", pastille.files[0]);
        }
        if (image.files[0]) { // <------
            fd.append("image", image.files[0]); // <------
        } // <------

        if (edit) {
            //// PUT.
            if (pastille.files[0]) {
                // If new file.
                fd.append("fileToDelete", item.pastille);
            } else {
                // If no new file.
                fd.append("fileToKeep", item.pastille);
            }
            if (image.files[0]) { // <------
                // If new file. // <------
                fd.append("fileImageToDelete", item.image); // <------
            } else { // <------
                // If no new file. // <------
                fd.append("fileImageToKeep", item.image); // <------
            } // <------
            // Request.
            await axios.put(`${process.env.REACT_APP_BACK_URL}/api/body/moment/${item.id}`, fd, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
                // Redirection.
                .then(() => { navigate('/admin/moments'); });
        } else {
            //// POST.
            await axios.post(`${process.env.REACT_APP_BACK_URL}/api/body/moment`, fd, {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            })
                .then(() => { navigate('/admin/moments'); });
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
                        name="people"
                        control={control}
                        defaultValue={item ? item.people : ""}
                        rules={{ required: true }}
                        render={({ field }) => <TextField
                            label="Nombre de personnes"
                            value={field.value}
                            variant="filled"
                            fullWidth
                            margin={'normal'}
                            {...field}
                        />}
                    />
                    <Controller
                        name="hours"
                        control={control}
                        defaultValue={item ? item.hours : ""}
                        rules={{ required: true }}
                        render={({ field }) => <TextField
                            label="Durée"
                            value={field.value}
                            variant="filled"
                            fullWidth
                            margin={'normal'}
                            {...field}
                        />}
                    />
                    <Controller
                        name="price"
                        control={control}
                        defaultValue={item ? item.price : ""}
                        rules={{ required: true }}
                        render={({ field }) => <TextField
                            label="Prix"
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
                    <Controller
                        name="image"
                        control={control}
                        rules={{ required: false }}
                        render={({ field }) => <TextField
                            id='image'
                            type='file'
                            label="Image Description"
                            variant="filled"
                            fullWidth
                            margin={'normal'}
                            {...field}
                        />
                        }
                    />
                    <div>
                        {item && <img width='200' src={`${process.env.REACT_APP_BACK_URL}/pastilles/moments/${item.pastille}`} alt={item.pastille} />}
                        {item && <img width='200' src={`${process.env.REACT_APP_BACK_URL}/moments/images/${item.image}`} alt={item.image} />}
                    </div>
                    <Link to={'/admin/moments'}>
                        <Button sx={{ mt: 2, textTransform: 'none' }} variant="contained" color='error'>Annuler</Button>
                    </Link>
                    <Button sx={{ mt: 2, mx: 2, textTransform: 'none' }} variant="contained" type="submit">Valider</Button>
                </form>
            </>
        );
    }

};

export default MomentForm;;;