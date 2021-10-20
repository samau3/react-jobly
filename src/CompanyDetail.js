import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import JobCardList from "./JobCardList";
import JoblyApi from "./api";


/** Shows a specific company's information
 * 
 * props:
 * - none
 * 
 * states:
 * - companyData (null or an object of companyData)
 * 
 * events:
 * - none
 * 
 * Routes -> CompanyDetail -> JobCardList
 */
function CompanyDetail() {
    const { company } = useParams();
    const [companyData, setCompanyData] = useState(null);
    console.log("CompanyDetail", { company, companyData })

    useEffect(function getCompanyFromApi() {
        async function getCompanyData() {
            setCompanyData(await JoblyApi.getCompany(company));
        }
        getCompanyData()
    }, []);

    if (!companyData) {
        return <div> Loading...</div>
    }

    return (
        <div>
            <h1>{companyData.name}</h1>
            <h3>{companyData.description}</h3>
            <h6>{companyData.jobs[0].title}</h6>
            <JobCardList />
        </div>
    );
}

export default CompanyDetail;