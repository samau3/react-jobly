import "./JobCard.css";
/** Renders single job information
 * 
 * props:
 * -job - object of job data
 * 
 * states:
 * - none
 * 
 * events:
 * -none
 * 
 * JobCardList -> JobCard
 */

function JobCard({ job }) {
    console.log("JobCard")
    return (
        <div className="JobCard">
            <h4>{job.title}</h4>
            <p>{job.companyName}</p>
            {job.salary && <p>Salary: {job.salary}</p>}
            {job.equity && <p>Equity: {job.equity}</p>}
        </div>
    );
}

export default JobCard;