import axios from 'axios';
import { useForm } from 'react-hook-form';

const UploadFile = () => {

    const { handleSubmit, register } = useForm();


    const onSubmit = async (data) => {

        console.log(data);

        const formData = new FormData();
        formData.append("pastille", data.pastille[0]);

        console.log(formData);

        await fetch(`${process.env.REACT_APP_BACK_URL}/api/body/equipement/upload`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json());

    };

    return (
        <>
            <h1>File upload with Controller</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="file" id="pastille" {...register('pastille')} />
                <input type="submit" />
            </form>
        </>
    );
};

export default UploadFile;