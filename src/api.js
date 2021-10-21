import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  // static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  //   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  //   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
  static token = null;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }


  // Individual API routes

  /** Get details on a company by handle. 
   * 
   * Company is { handle, name, description, numEmployees, logoUrl, jobs }
   *  where jobs is [{ id, title, salary, equity }, ...]
  */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get all companies from API or companies that match search term. 
   * 
   * Returns [ { handle, name, description, numEmployees, logoUrl }, ...] 
  */
  static async getAllCompanies(name) {
    // note need to pass in the second argument to let axios handle potential special characters
    let res = await this.request('companies/', { name });
    return res.companies;
  }


  /** Get all jobs from API or jobs that match search term. 
  * 
  * Returns [ { id, title, salary, equity, companyHandle, companyName }, ...]
 */
  static async getAllJobs(title) {
    let res = await this.request('jobs/', { title });
    return res.jobs;
  }

  /** Authenticate user by submitting a POST request to API.
  * 
  * Returns { token }
  */
  static async getToken(user) {
    let res = await this.request('auth/token', user, 'post');
    this.token = res.token;
    return res.token;
  }

  /** Register a user by submitting a POST request to API.
  * 
  * Returns { token }
  */
  static async registerUser(user) {
    let res = await this.request('auth/register', user, 'post');
    this.token = res.token;
    return res.token;
  }

  /** Updates a user by submitting a PATCH request to API.
  * 
  * Returns { username, firstName, lastName, email, isAdmin }
  */
  static async editUser(user) {
    let res = await this.request(`users/${user.username}`, user, 'patch');
    return res; 
  }

  /** Gets user info by submitting a GET request to API.
  * 
  * Returns { username, firstName, lastName, email, isAdmin }
  */
  static async getUser(user) {
    let res = await this.request(`users/${user.username}`);
    return res; 
  }

}

export default JoblyApi;
