import Api, { IData } from '..';
import { IPriceToday } from '../../stores/priceToday';

interface IGetActualPriceRes extends IData<IPriceToday> {};

interface IService {
   getActualPrice(): Promise<IGetActualPriceRes>;
}

class Service extends Api implements IService {
   constructor() {
      super('/dolar-price');
   }

   async getActualPrice(): Promise<IGetActualPriceRes> {
      return await this.get('/get-actual-price');
   }
}

export default new Service;
