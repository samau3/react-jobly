import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import JobCardList from "./JobCardList";
import JoblyApi from "./api";


/** Renders a specific company's information and jobs
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
    const { handle } = useParams();
    const [companyData, setCompanyData] = useState(null);
    const [err, setErr] = useState(null);
    console.log("CompanyDetail", { handle, companyData });

    useEffect(function getCompanyFromApi() {
        async function getCompanyData() { 
            try {
                const resp = await JoblyApi.getCompany(handle)
                setCompanyData(resp);
            } catch(error) {
                console.log("catch err", err)
                setErr(error);
            }
        }
        getCompanyData();
    }, [handle, err]);

    if (err){
        return <i>Error: {err[0]}</i>
    }

    if (!companyData) {
        return <div> Loading...</div>
    }

    return (
        <div>
            <h1>{companyData.name}</h1>
            <h3>{companyData.description}</h3>
            {companyData.jobs.length === 0 
            ? <div> No jobs listed </div>
            : <JobCardList jobs={companyData.jobs}/>}
        </div>
    );
}

export default CompanyDetail;