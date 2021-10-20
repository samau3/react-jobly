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
    console.log("CompanyList", { companies, searchTerm });

    function handleSearch(formData) {
        setSearchTerm(formData);
    }

    useEffect(function getCompaniesFromApi() {
        async function setCompaniesFromApi() {
            setCompanies(await JoblyApi.getAllCompanies(searchTerm));
        }
        setCompaniesFromApi()
    }, [searchTerm]);

    if (!companies) {
        return <div> Loading...</div>
    }

    return (
        <div>
            <h1>Company List Component</h1>
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