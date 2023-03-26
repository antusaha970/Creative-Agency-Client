import { Box, Button, Grid } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import client from '../../Api/Client';
import { LoggedInUserContext } from '../../Contexts/Contexts';

const ReviewForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [user, setUser] = useContext(LoggedInUserContext);
    const [photo, setPhoto] = useState(null);
    const handleReview = data => {
        client.post('/postReview', data)
        .then(response => {
            if (response.data) {
                alert('Review Posted Successfully');
            }
            else {
                alert('Failed to Post Review');
            }
        })
    };

    const handleFileChange = (e) => {
        setPhoto(e.target.files[0]);
    }

    return (
        <Grid item lg={10} md={10} sm={10} xs={12}>
            <div className='bgDashboard'>
                <Box sx={{
                    padding: '20px'
                }}>
                    <form onSubmit={handleSubmit(handleReview)}>
                        {errors.name && <span>This field is required</span>}
                        <input placeholder='Your Name' type="text" name="name"  {...register("name", { required: true })} className="contact-inputs" defaultValue={user.displayName} />
                        {errors.company && <span>This field is required</span>}
                        <input placeholder='Company name' type="text" name="name"  {...register("company", { required: true })} className="contact-inputs" />
                        {errors.description && <span>This field is required</span>}
                        <textarea type="text" placeholder='description' name="details"  {...register("description", { required: true })} className="contact-inputs" />
                        <label htmlFor="photo">Your photo</label>
                        <input placeholder='Company name' id='photo' onChange={handleFileChange} type="file" name="name" className="contact-inputs"  />
                        <Button variant="contained" type='submit'>Send</Button>
                    </form>
                </Box>
            </div>
        </Grid>
    );
};

export default ReviewForm;