import SearchForm from "./SearchForm";
import JobCardList from "./JobCardList";
import JoblyApi from "./api"

function JobList() {
    return (
        <div>
            <h1>Job List Component</h1>
            <SearchForm/>
            <JobCardList/>
        </div> 
        
    );
}

export default JobList;