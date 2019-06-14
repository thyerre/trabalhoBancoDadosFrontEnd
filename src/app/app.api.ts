import {environment} from "../environments/environment"
export const API = environment.api
export const APIWithoutApi = API.split('/api')[0]; 
export const API_PATH_IMG = APIWithoutApi+'/img'