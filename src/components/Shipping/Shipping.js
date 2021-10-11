import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';


const Shipping = () => {
    const { register, handleSubmit,formState: { errors } } = useForm();
    const {user} = useAuth()
  const onSubmit = data => {
      console.log(data);
    }
    return (
        <div className="login_Form">
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