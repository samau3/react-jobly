
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

function JobCard({job}) {

    return (
        <div>
            <h3>{job.title}</h3>
            {job.salary && <p>Salary: {job.salary}</p>}
            {job.equity && <p>Equity: {job.equity}</p>}
        </div>
    );
}

export default JobCard;