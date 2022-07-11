import { Button, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

const ContactForm = () => {

    const { handleSubmit, control } = useForm();

    const onSubmit = async (data) => {

        console.log(data);

    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name="nom"
                    control={control}
                    rules={{ required: true }}
                    defaultValue=''
                    // defaultValue={(item ? item.nom : '')}
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
                    name="email"
                    control={control}
                    rules={{ required: true }}
                    defaultValue=''
                    render={({ field }) => <TextField
                        label="Email"
                        variant="filled"
                        fullWidth
                        margin={'normal'}
                        {...field}
                    />
                    }
                />
                <Controller
                    name="tel"
                    control={control}
                    rules={{ required: false }}
                    defaultValue=''
                    // defaultValue={(item ? item.nom : '')}
                    render={({ field }) => <TextField
                        label="Téléphone"
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
                    defaultValue=''
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
                <Button className='border-effect-blue mt-sm mb-lg' variant="contained" type="submit">Envoyer</Button>
            </form>
        </>
    );
};

export default ContactForm;