const BASE_URL = 'https://api.escuelajs.co/api/v1';
import axios from "axios";
export const getAllPrducts = async () =>{
    const URL=`${BASE_URL}/products`;
    try{
        const {data} = await axios.get(URL);
        return data;
    }
    catch(err){
        return err;
    }

}