import request from "./../../utils/request";

export const testService =(data)=>request.post('v1/test',data); //this will give an error cause no routes enabled in server