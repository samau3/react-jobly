import JobCard from "./JobCard";


/** Renders list of jobs 
 * 
 * props:
 * -jobs - array of job objects
 * 
 * states:
 * - none
 * 
 * events:
 * -none
 * 
 * {JobList, CompanyDetail} -> JobCardList -> JobCard
 */
function JobCardList({ jobs }) {

    return (
        <div>
            {jobs.map(job => 
                <JobCard job={job} key={job.id}/>
            )}
        </div>

    );
}

export default JobCardList;