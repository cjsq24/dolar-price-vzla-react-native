import create from 'zustand';

export interface IPriceToday {
   _id: string;
   platforms: [{
      platform_id: {
         _id: string;
         name: string;
         keyname: string;
         status: string;
         image: string;
      };
      price: string;
      fluctuationBS: number;
      fluctuationPercent: number;
   }];
   created_at: any;
}

interface IState {
   priceToday: IPriceToday | undefined,
   setPriceToday: (data: IPriceToday) => void;
}

const useStore = create<IState>(set => ({
   priceToday: undefined,
   setPriceToday: (data: IPriceToday) => {
      set({ priceToday: data });
   }
}))

export default useStore;