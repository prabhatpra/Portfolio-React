import axios from "axios";


export const loginUser = async (loginData) => {
    return axios.post(
        `${API_BASE_URL}/login`,
        loginData
    );
};

export const registerUser = async (signupData) => {
    return axios.post(
        `${API_BASE_URL}/register`,
        signupData
    );
};