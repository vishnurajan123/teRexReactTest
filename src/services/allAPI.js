import { commonAPI } from "./commonAPI"
import { BASE_URL } from "./serverURL"

export const getProducts=async()=>{
    return await commonAPI("GET",BASE_URL,"")
}