import { Button, Grid } from '@mui/material';
import React, { useContext } from 'react';
import './OrderServices.css';
import { useForm } from "react-hook-form";
import { LoggedInUserContext } from '../../Contexts/Contexts';
import client from '../../Api/Client';

const OrderServices = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [user,setUser] = useContext(LoggedInUserContext);
    const handleContactForm = (data) => {
        console.log(data);
        client.post('/addOrder', data).then(response =>{
            console.log(response.data);
            if(response.data){
                alert('Order placed successfully');
            }
            else{
                alert('something went wrong please try again later');
            }
        })
    }
    return (
        <Grid item lg={10} md={10} sm={10} xs={12}>
            <aside className="bgDashboard">
                <div className='form-container'>
                    <form onSubmit={handleSubmit(handleContactForm)}>
                        {errors.name && <span>This field is required</span>}
                        <input placeholder='Your Name/Company name' type="text" name="name"  {...register("name", { required: true })} className="contact-inputs" defaultValue={user.displayName} />
                        {errors.email && <span>This field is required</span>}
                        <input placeholder='Enter your email' type="email" name="email"  {...register("email", { required: true })} className="contact-inputs" defaultValue={user.email} />
                        {errors.service && <span>This field is required</span>}
                        <input placeholder='Enter Service name' list="serviceList" type="text" name="service"  {...register("service", { required: true })} className="contact-inputs" />
                        {errors.projectDetails && <span>This field is required</span>}
                        <textarea type="text" placeholder='Project details' name="details"  {...register("projectDetails", { required: true })} className="contact-inputs" />
                        <Button variant="contained" type='submit' >Send</Button>
                    </form>
                </div>
                <datalist id="serviceList">
                    <option value="Web and Mobile Design" />
                    <option value="Graphic Design" />
                    <option value="Web Development" />
                </datalist>
            </aside>
        </Grid>
    );
};

export default OrderServices;