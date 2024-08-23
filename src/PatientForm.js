// src/PatientForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import './PatientForm.css'; // Import the CSS file for styling

const PatientForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        alert('Form submitted successfully!');
    };

    return (
        <div className="form-container">
            <h2>Patient Details Form</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" {...register('name', { required: true })} />
                    {errors.name && <span className="error">This field is required</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" {...register('age', { required: true, min: 0 })} />
                    {errors.age && <span className="error">Please enter a valid age</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" {...register('email', { required: true })} />
                    {errors.email && <span className="error">Please enter a valid email</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="symptoms">Symptoms</label>
                    <textarea id="symptoms" {...register('symptoms')} />
                </div>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default PatientForm;
