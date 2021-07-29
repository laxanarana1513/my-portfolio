import axios from "axios";

const instance = axios.create({
    baseURL: 'https://my-portfolio-6a1cb-default-rtdb.firebaseio.com/'
})

export default instance