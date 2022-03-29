import axios from "axios";

const back_instance = axios.create({
    baseURL : "http://localhost:8000/api",
    timeout : 2000,
    headers : {
        'Accept' : 'application/json' ,
        'Content-Type' : 'application/json',
    }
})



export default back_instance;
