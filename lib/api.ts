import axios from "axios";

import type { ProductsResponse, User } from "@/types/api";

import { useAuthStore } from "../store/auth";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = useAuthStore.getState().user?.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export const loginRequest = async (
  username: string,
  password: string
): Promise<User> => {
  const res = await axios.post<User>("https://dummyjson.com/auth/login", {
    username,
    password,
  });
  return res.data;
};

export const getProducts = async (
  limit = 12
): Promise<ProductsResponse["products"]> => {
  const res = await api.get<ProductsResponse>(`/products?limit=${limit}`);
  return res.data.products;
};
