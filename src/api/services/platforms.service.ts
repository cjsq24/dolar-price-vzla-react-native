import { AxiosResponse } from "axios";
import Api, { IGlobalResp } from "../../api";
import { IPlatform } from "../../stores/platforms";
import { IPriceToday } from "../../stores/priceToday";

interface IService {
	getList(): Promise<AxiosResponse<IGlobalResp<IPriceToday>>>;
}

class Service extends Api implements IService {
	constructor() {
		super("/platforms");
	}

	async getList() {
		return await this.get<IGlobalResp<IPriceToday>>("/list");
	}
}

export default new Service();
