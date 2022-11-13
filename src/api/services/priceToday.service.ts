import { AxiosResponse } from "axios";
import Api, { IGlobalResp } from "../index";
import { IPriceToday } from "../../stores/priceToday";

interface IService {
	getActualPrice(): Promise<IGlobalResp<IPriceToday>>;
}

class Service extends Api implements IService {
	constructor() {
		super("/dolar-price");
	}

	async getActualPrice() {
		const { data } = await this.get<IGlobalResp<IPriceToday>>(
			"/get-actual-price"
		);
		return data;
	}
}

export default new Service();
