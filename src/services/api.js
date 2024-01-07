import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'X-Api-Key': process.env.REACT_APP_API_KEY,
    },
});
export const getNews = async (query = '', category = 'general') => {
    try{
        const response = await axiosInstance.get(`/top-headlines?category=${category}&country=us&q=${query}`);
        console.log(response);
        return response;
    } catch{
        throw new Error('Failed to fetch news');   
    }
}