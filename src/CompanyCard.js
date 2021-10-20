import { Link } from "react-router-dom";
import "./CompanyCard.css";
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
        <Link className="CompanyCard-link" to={`/companies/${handle}`}>
            <div className="CompanyCard">
                <h4>{name}{logoUrl && <img className="CompanyCard-img" src={logoUrl} alt={name} />}</h4>

                <p><i>{description}</i></p>
            </div>
        </Link>
    );
}

export default CompanyCard;