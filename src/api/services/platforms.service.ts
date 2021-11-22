import Api, { IData } from '../../api';
import { IPlatform } from '../../stores/platforms';

interface IGetListRes extends IData<IPlatform[]> {};

interface IService {
   getList(): Promise<IGetListRes>;
}

class Service extends Api implements IService {
   constructor() {
      super('/platforms');
   }

   async getList(): Promise<IGetListRes> {
      return await this.get('/list');
   }
}

export default new Service;
