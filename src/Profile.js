import React, { useState, useContext } from "react";
import UserContext from "./userContext";

function Profile({ editUser }) {
    const { username, firstName, lastName, email } = useContext(UserContext)
    console.log("Profile", { username, firstName, lastName, email });

    const initialState = {
        username: username,
        password: "",
        firstName: firstName,
        lastName: lastName,
        email: email
    };
    const [formData, setFormData] = useState(initialState);

    /** Send {name, quantity} to parent
     *    & clear form. */
    function handleSubmit(evt) {
        evt.preventDefault();
        editUser(formData);
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
                value={username}
                onChange={handleChange}
            />
            <label htmlFor="firstName">First Name:</label>
            <input
                id="firstName"
                name="firstName"
                value={firstName}
                onChange={handleChange}
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
                id="lastName"
                name="lastName"
                value={lastName}
                onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
            />

            <label htmlFor="password">Confirm password to make changes:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />

            <button>Save Changes</button>
        </form>
    )
}
// const user = {username: "liz", password: "password", firstName: "liz", lastName: "ahler", email: "a@a.com"}
export default Profile;