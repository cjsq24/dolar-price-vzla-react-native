import create from 'zustand';

export interface IPriceToday {
   _id: string;
   platforms: [{
      plaftform_id: string;
      price: string;
   }]
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