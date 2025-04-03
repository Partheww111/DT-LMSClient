import { environment } from "../../../../environments/environment";

const API_BASE_URL = environment.apiUrl;
export const API_ENDPOINTS ={
    User:{
        Base: API_BASE_URL+"User/",
        List: API_BASE_URL+"User/List"
    },
    Library:{
        Base: API_BASE_URL+"Library/",
        List: API_BASE_URL+"Library/List"
    },
    Branch:{
        Base: API_BASE_URL+"Branch/",
        List: API_BASE_URL+"Branch/List"
    },
}