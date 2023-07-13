import axios from "axios";
const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OGFlN2Y2YjJiMGFkYzY0MDJjY2FjNyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODY4MjU0NDIsImV4cCI6MTY4NzA4NDY0Mn0.F0JPr-qfqyCt1JLA8NDb_U34vR1D_c_V7leH5XILYtI";

export const publicRequest = axios.create(
    {
        baseURL: BASE_URL

    }
)

export const userRequest = axios.create(
    {
        baseURL: BASE_URL,
        header:{token:`Bearer ${TOKEN}`}
    }
)
