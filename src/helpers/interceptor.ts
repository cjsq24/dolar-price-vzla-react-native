import axios from 'axios';
//axios.defaults.baseURL = process.env.REACT_APP_API_URL_BASE;
axios.defaults.baseURL = 'http://192.168.1.15:4000/api';

axios.interceptors.response.use(
	async function(response) {
		return response;
	},
	async function(err) {
		try {
			if (err?.response?.data && err?.response?.data?.message) {
				console.log(err.response.data);
				return err.response;
			}
			return {
				data: {
					success: false,
					message: err,
					values: {}
				}
			};
		} catch (e: any) {
			return {
				data: {
					success: false,
					message: e.toString(),
					values: {}
				}
			};
		}
	}
);

export default axios;