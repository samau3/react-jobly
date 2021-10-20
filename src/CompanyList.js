import { useState, useEffect } from "react"
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api"


/** Shows all companies
 * 
 * props:
 * -none
 * 
 * states:
 * - companies (either an array of found companies or null)
 * - searchTerm (string or null)
 * 
 * events:
 * -none
 * 
 *  Routes -> CompanyList -> {SearchForm, CompanyCard}
 */

function CompanyList() {
    const [companies, setCompanies] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);
    const [err, setErr] = useState(null);
    console.log("CompanyList", { companies, searchTerm });

    function handleSearch(formData) {
        setSearchTerm(formData);
    }

    useEffect(function getCompaniesFromApi() {
        async function setCompaniesFromApi() { 
            try {
                const resp = await JoblyApi.getAllCompanies(searchTerm)
                setCompanies(resp);
            } catch(error) {
                setErr(error);
            }
            
        }
        setCompaniesFromApi();
    }, [searchTerm]);

    if (err){
        return <i>Err {err[0]}</i>
    }

    if (!companies) {
        return <div> Loading...</div>
    }

    return (
        <div>
            <h1>Companies</h1>
            <SearchForm handleSearch={handleSearch} />
            {companies.length === 0
                ? <div>Sorry, no results were found</div>
                : companies.map(company =>
                    <CompanyCard
                        key={company.handle}
                        companyData={company} />)}
        </div>
    );
}

export default CompanyList;