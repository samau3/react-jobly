import React, { useState, useContext } from "react";
import UserContext from "./userContext";
import "./Profile.css"

/** Allows a user to edit their name and email on their profile
 * 
 * props:
 * - editUser (fn)
 * 
 * state:
 * - submitted
 * 
 * events:
 * - handleSubmit
 * - handleChange
 * 
 * Routes -> Profile
 */
function Profile({ editUser }) {
    const { user } = useContext(UserContext);
    const [submitted, setSubmitted] = useState(false);
    const { username, firstName, lastName, email } = user;
    console.log("Profile", { username, firstName, lastName, email });

    const initialState = {
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email
    };
    const [formData, setFormData] = useState(initialState);
    const [err, setErr] = useState(null);


    /** Send {name, quantity} to parent
     *    & clear form. */
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            delete formData.username;
            await editUser(formData, username);
            setSubmitted(true);
            setErr(null)
        } catch (error) {
            setErr(error);
        }

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
        <form onSubmit={handleSubmit} className="Profile">
            <label htmlFor="username">Username:</label>
            <input
                id="username"
                name="username"
                placeholder={username}
                disabled
            />
            <label htmlFor="firstName">First Name:</label>
            <input
                id="firstName"
                name="firstName"
                placeholder={firstName}
                value={formData.firstName}
                onChange={handleChange}
            />

            <label htmlFor="lastName">Last Name:</label>
            <input
                id="lastName"
                name="lastName"
                placeholder={lastName}
                value={formData.lastName}
                onChange={handleChange}
            />

            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder={email}
                value={formData.email}
                onChange={handleChange}
            />


            <button>Save Changes</button>
            {err && <b>{err[0]}</b>}
            {submitted && <b>Updated successfully.</b>}
        </form>
    )
}

export default Profile;