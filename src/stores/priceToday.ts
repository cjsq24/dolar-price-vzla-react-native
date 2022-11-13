import create from "zustand";

export interface IPriceToday {
	_id: string;
	platforms: IPlatformPrice[];
	created_at: string;
}

export interface IPlatform {
	_id: string;
	name: string;
	keyname: string;
	status: string;
	image: string;
}

export interface IPlatformPrice {
	platform_id: IPlatform;
	price: string;
	fluctuation_bs: string;
	fluctuation_percent: string;
}

interface IState {
	priceToday: IPriceToday | undefined;
	setPriceToday: (data: IPriceToday) => void;
}

const useStore = create<IState>((set) => ({
	priceToday: undefined,
	setPriceToday: (data: IPriceToday) => {
		set({ priceToday: data });
	},
}));

export default useStore;
