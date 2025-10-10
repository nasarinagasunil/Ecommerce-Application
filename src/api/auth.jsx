import axios from "axios";


export const userLogin = async (email, password) =>{
    const URL = "https://api.escuelajs.co/api/v1/auth/login";

    try{
        const {data} =await axios.post(URL,{
            email: email,
            password: password
        })
        return data
    }
    catch(err){
        return err;
    }

}

export const userSignUp = async (name, email, password) =>{
    const URL = "https://api.escuelajs.co/api/v1/users/";
    try{
        const {data} = await axios.post(URL,{
            name: name,
            email: email,
            password: password,
            avatar: "https://picsum.photos/800"
        })
        return data;
    }
    catch(err){
        return err;
    }
}