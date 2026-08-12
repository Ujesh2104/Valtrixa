import api from "./axios";

export const loginUser = (data) => {
    return api.post("/auth/login", data);
};

export const signupUser = (data) => {
    return api.post("/auth/signup", data);
};

export const getProfile = () => {
    return api.get("/user/profile");
};