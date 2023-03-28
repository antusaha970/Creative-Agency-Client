import axios from "axios";
const client = axios.create({
    baseURL: 'https://creative-agency-server.cyclic.app/'
});

export default client;