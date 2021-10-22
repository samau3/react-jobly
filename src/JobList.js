import { useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import JoblyApi from "./api";
import "./JobList.css";

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
    const [ err, setErr] = useState(null)
    console.log("JobList", { jobs, searchTerm });

    function handleSearch(formData) {
        setSearchTerm(formData);
    }

    useEffect(function getJobsFromApi() {
        async function setJobsFromApi() {
            try{
                const resp = await JoblyApi.getAllJobs(searchTerm);
            setJobs(resp);
            } catch(error){
                setErr(error)
            }   
        }
        setJobsFromApi();
    }, [searchTerm]);
    
    if (err){
        return <i>Error: {err[0]}</i>
    }

    if (!jobs) {
        return <div> Loading...</div>
    }

    return (
        <div className="JobList">
            <h1>Jobs</h1>
            <SearchForm handleSearch={handleSearch}/>
            {jobs.length === 0
                ? <div>Sorry, no results were found</div>
                : <JobCardList jobs={jobs}/>}
        </div> 
        
    );
}

export default JobList;