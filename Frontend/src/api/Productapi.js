import api from "./axios";

export const analyzeProduct = (data) => {
    return api.post("/product/analyze", data);
};

export const getAllProducts = () => {
    return api.get("/product/all");
};

export const getProductById = (id) => {
    return api.get(`/product/${id}`);
};

export const updateProduct = (id, data) => {
    return api.put(`/product/${id}`, data);
};

export const deleteProduct = (id) => {
    return api.delete(`/product/${id}`);
};