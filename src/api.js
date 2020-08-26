import { apiURL } from "./config";
import axios from 'axios';

export const getProduct = async (id) => {
    try {
        const response = await axios({
            url: `${apiURL}/api/products/${id}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if(response.statusText !== 'OK'){
            throw new Error(response.data.message);
        }
        return response.data
    } catch(err){
        console.log(err);
        return { error: err.response.data.message || err.message }
    }
};

export const signin = async ({ email, password}) => {
    try {
        const res = await fetch(`/${apiURL}/api/users/signin`, {
            method: 'POST',
            body: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(email, password)
        });
        if(!res || !res.ok){
            throw new Error(res.data.message);
        }
        return res.data;
    } catch (error) {
        console.log(error);
    }
};