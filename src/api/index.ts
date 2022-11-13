import axios from "axios";
import { Alert } from "react-native";
import Config from "react-native-config";

//export const API_BASE_URL = 'http://192.168.1.2:4000/api';
console.log("api_url", Config.API_URL);

export const api = axios.create({
	baseURL: Config.API_URL,
	timeout: 15000,
});

export interface IGlobalResp<T> {
	success: boolean;
	message: string;
	data: T;
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

	protected async get<T>(url: string, body?: any) {
		try {
			const data = await api.get<T>(`${this.base}${url}`, { params: body });
			return data;
		} catch (e) {
			console.log(e);
			//Alert.alert(e.toString());
			return Promise.reject({
				success: false,
				message: "Error connection",
			});
		}
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
		const { data } = await api.delete(`${this.base}${url}`, { params });
		return data;
	}
}

export default Api;
