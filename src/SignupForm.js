import React, { useState } from "react";

function SignupForm({ signupUser }) {
    const initialState = { username: "", 
                        password: "" , 
                        firstName: "", 
                        lastName: "", 
                        email: ""};
    const [formData, setFormData] = useState(initialState);

    /** Send {name, quantity} to parent
     *    & clear form. */
    function handleSubmit(evt) {
        evt.preventDefault();
        signupUser(formData);
        // setFormData(initialState);
    }

    /** Update local state w/curr state of input elem */
    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value,
        }));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />

            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />

            <label htmlFor="firstName">First Name:</label>
            <input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
            <button>Sign up</button>
        </form>
    )
}

export default SignupForm;