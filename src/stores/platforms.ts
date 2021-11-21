import create from 'zustand';

export interface IPlatform {
   _id: string;
   name: string;
   keyname: string;
   image: string;
}

interface IState {
   platforms: IPlatform[] | undefined,
   setPlatforms: (data: IPlatform[]) => void;
}

const useStore = create<IState>(set => ({
   platforms: undefined,
   setPlatforms: (data: IPlatform[]) => {
      set({ platforms: data });
   }
}));

export default useStore;
