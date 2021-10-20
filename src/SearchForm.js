import React, { useState } from "react";

/** Form for searching 
 * 
 * props:
 * - handleSearch (function)
 * 
 * states:
 * - none
 * 
 * events:
 * - handleChange
 * - handleSubmit
 * 
 * { CompanyList, JobList } -> SearchForm
 */

function SearchForm({ handleSearch }) {
    const [searchTerm, setSearchTerm] = useState("");

    console.log("SearchForm", { searchTerm, handleSearch });

    /** Update local state w/curr state of input elem */
    function handleChange(evt) {
        setSearchTerm(evt.target.value);
    }

    /** Send {search} to parent
        *    & clear form. */
    function handleSubmit(evt) {
        evt.preventDefault();
        (searchTerm.length === 0)
            ? handleSearch(null)
            : handleSearch(searchTerm);
        setSearchTerm("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                id="searchTerm"
                value={searchTerm}
                onChange={handleChange}
            />

            <button>Search</button>
        </form>
    );
}

export default SearchForm;