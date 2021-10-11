import userEvent from '@testing-library/user-event';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';


const Shipping = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const {user} = useAuth()
  const onSubmit = data => {
      console.log(data);
    }
    return (
        <div>
            <h1>This is shipping</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue={user.displayName} {...register("name")} /> <br />
      <input defaultValue={user.email} {...register("email", { required: true })} /> <br />
      {errors.email && <span>This field is required</span>}
      <input defaultValue="" {...register("address")} /> <br />
      <input defaultValue="" {...register("city")} /> <br />
      <input defaultValue="" {...register("phone")} /> <br />
      
      <input type="submit" />
    </form>
        </div>
    );
};

export default Shipping;