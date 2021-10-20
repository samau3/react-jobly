import { Link } from "react-router-dom";

function CompanyCard({companyData}) {
    console.log("CompanyCard")
   const{ handle, name, description, logoUrl } = companyData;
    return (
        <Link to={`/companies/${handle}`}>
            <b>{name}</b>
            <img src = {logoUrl} alt={null}/>
            <i>{description}</i>
        </Link>
    );
}

export default CompanyCard;