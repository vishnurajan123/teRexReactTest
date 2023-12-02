import { commonAPI } from "./commonAPI"
import { BASE_URL } from "./serverURL"

export const getProducts=async(search)=>{
    return await commonAPI("GET",`${BASE_URL}?search=${search}`,"")
}