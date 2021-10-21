import React, { useState } from "react";

/** Form to log in user
 * 
 * props: 
 *  - loginUser function
 * 
 * state: 
 * - formData
 * 
 * events:
 * - onSubmit
 * 
 * Routes -> LoginForm
 */

function LoginForm({ loginUser }) {
    const initialState = { username: "", password: "" };
    const [formData, setFormData] = useState(initialState);

    /** Send {name, quantity} to parent
     *    & clear form. */
    function handleSubmit(evt) {
        evt.preventDefault();
        loginUser(formData);
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

            <button>Login</button>
        </form>
    )
}

export default LoginForm;