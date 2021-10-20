import { Link } from "react-router-dom";

/** Renders a company's basic info 
 * 
 * props:
 * - companyData
 * 
 * states:
 * - none
 * 
 * events:
 * - none
 * 
 * CompanyList -> CompanyCard
 */
function CompanyCard({ companyData }) {
    console.log("CompanyCard");
    const { handle, name, description, logoUrl } = companyData;
    return (
        <div>
            <Link to={`/companies/${handle}`}>
                <b>{name}</b>
                <img src={logoUrl} alt={null} />
                <i>{description}</i>
            </Link>
        </div>

    );
}

export default CompanyCard;