import axios from "axios";

const httpRequest = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
}) 


export default httpRequest;