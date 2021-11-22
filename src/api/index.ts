import axios from 'axios';

export const API_BASE_URL = "http://192.168.1.15:4000/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
});

export interface IData<T> {
   success: boolean;
   message: string;
   data: T
}

/* interface IApi {
   base: string;
   get(url: string, body?: any): Promise<any>;
   post(url: string, body: any, params?: any): Promise<any>;
   put(url: string, body: any, params?: any): Promise<any>;
   delete(url: string, params: any): Promise<any>;
} */

class Api /* implements IApi */ {
   protected base: string;

   constructor(base: string) {
      this.base = base;
   }

   protected async get(url: string, body?: any) {
      const { data } = await api.get(`${this.base}${url}`, { params: body });
      return data;
   }

   protected async post(url: string, body?: any, params?: any) {
      const { data } = await api.post(`${this.base}${url}`, body, { params });
      return data;
   }

   protected async put(url: string, body?: any, params?: any) {
      const { data } = await api.put(`${this.base}${url}`, body, { params });
      return data;
   }

   async delete(url: string, params?: any) {
      const { data } = await api.delete(`${this.base}${url}`, { params })
      return data;
   }
}

export default Api;