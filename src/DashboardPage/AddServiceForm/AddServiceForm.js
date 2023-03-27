// This is add service form 
import { Box, Button, Grid } from '@mui/material';
import React from 'react';
import { useForm } from "react-hook-form";
import client from '../../Api/Client';

const AddServiceForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data =>{
        client.post('/addNewService',data).then(response =>{
            if(response.data){
                alert('New Service Added');
            }
            else{
                alert('Failed to add new service');
            }
        })
    };
    return (
        <Grid item lg={10} md={10} sm={10} xs={12}>
            <div className="bgDashboard">
                <Box sx={{
                    padding: '20px'
                }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="title">Service Title</label>
                        {errors.title && <><br /><span>This field is required</span></>}
                        <input id='title' {...register("title", { required: true })} placeholder="Service Title" className='contact-inputs' />
                        <label htmlFor="description">Service Description</label>
                        {errors.description && <><br /><span>This field is required</span></>}
                        <input id='description' {...register("description", { required: true })} placeholder="Service Description" className='contact-inputs' />
                        <label htmlFor="file">Service Icon</label>
                        <input id='file' type="file" className='contact-inputs' />
                        <Button variant='contained' color="success" type="submit">Submit</Button>
                    </form>
                </Box>
            </div>
        </Grid>
    );
};

export default AddServiceForm;