import { useState, useEffect } from "react"
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import JoblyApi from "./api"

/** Shows all jobs
 * 
 * props:
 * -none
 * 
 * states:
 * - jobs (either an array of found jobs or null)
 * - searchTerm (string or null)
 * 
 * events:
 * -none
 * 
 *  Routes -> JobList -> {SearchForm, JobCardList}
 */

function JobList() {
    const [jobs, setJobs] = useState(null);
    const [searchTerm, setSearchTerm] = useState(null);
    console.log("CompanyList", { jobs, searchTerm });

    function handleSearch(formData) {
        setSearchTerm(formData);
    }

    useEffect(function getJobsFromApi() {
        async function setJobsFromApi() {
            setJobs(await JoblyApi.getAllJobs(searchTerm));
        }
        setJobsFromApi();
    }, [searchTerm]);

    if (!jobs) {
        return <div> Loading...</div>
    }

    return (
        <div>
            <h1>Jobs</h1>
            <SearchForm handleSearch={handleSearch}/>
            {jobs.length === 0
                ? <div>Sorry, no results were found</div>
                : <JobCardList jobs={jobs}/>}
        </div> 
        
    );
}

export default JobList;