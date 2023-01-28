import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID MJC-2pJ5_eX8nToQ5BT26z_3ZJX49TOjGK_WJ_mhJbo'
    }
})