import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import client from '../../Api/Client';

const MakeAdminForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        client.post('/makeAdmin',data).then(response => {
            if(response.data) {
                alert("New Admin Added");
            }
            else{
                alert("Failed to add Admin");
            }
        })
    };

    return (
        <Grid item lg={10} md={10} sm={10} xs={12}>
            <div className='bgDashboard'>
                <Box sx={{
                    padding: '20px'
                }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="admin">Enter Admin Mail Address</label>
                        <input className="contact-inputs" placeholder='Enter an Email Address' id='admin' {...register("adminMail", { required: true })} type="email" />
                        {errors.adminMail && <span>This field is required</span>}
                        <br />
                        <Button variant='contained' color='success' type="submit">Submit</Button>
                    </form>
                </Box>
            </div>
        </Grid>
    );
};

export default MakeAdminForm;