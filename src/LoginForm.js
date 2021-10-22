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
    const [err, setErr] = useState(null)

    /** Send {name, quantity} to parent
     *    & clear form. */
    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            await loginUser(formData);
        } catch (error) {
            console.log("loginForm Error", error);
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

            {err && <b>{err[0]}</b>}
        </form>
    )
}

export default LoginForm;