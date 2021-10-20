import React, { useState } from "react";

function SearchForm({ handleSearch }) {
    const [formData, setFormData] = useState("");

    console.log("SearchForm", { formData, handleSearch });

    /** Update local state w/curr state of input elem */
    function handleChange(evt) {
        setFormData(evt.target.value);
    }

    /** Send {search} to parent
        *    & clear form. */
    function handleSubmit(evt) {
        evt.preventDefault();
        // handleSearch(formData)
        (formData.length === 0)
            ? handleSearch(null)
            : handleSearch(formData);
        setFormData("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                id="searchTerm"
                name="searchTerm"
                value={formData}
                onChange={handleChange}
            />

            <button>Search</button>
        </form>
    );
}

export default SearchForm;