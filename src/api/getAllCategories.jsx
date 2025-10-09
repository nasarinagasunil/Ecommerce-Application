const BASE_URL = "https://api.escuelajs.co/api/v1";
import axios from "axios";

export const getAllCategories = async () =>{
    const URL = `${BASE_URL}/categories`;
    try{
        const {data} = await axios.get(URL);
        console.log(data);
        return data;
    }
    catch(err){
        return err;
    }
}