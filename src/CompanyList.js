import {useState, useEffect} from "react"
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api"

function CompanyList() {
    const [companies, setCompanies] = useState([]);
    const [searchTerm, setSearchTerm] = useState(null)
    console.log("CompanyList", {companies, searchTerm})

    function handleSearch(formData){
        setSearchTerm(formData)
    }

    useEffect(function getCompaniesFromApi(){
        async function setCompaniesFromApi(){
           setCompanies(await JoblyApi.getAllCompanies(searchTerm));
        }
        setCompaniesFromApi()
    }, 
    [])

    if (companies.length === 0){
        return <div> Loading...</div>
    }

    return (
        <div>
            <h1>Company List Component</h1>
            <SearchForm handleSearch={handleSearch}/>
            {companies.map(company => <CompanyCard companyData={company} key={company.handle}/>)}
        </div>
    );
}

export default CompanyList;