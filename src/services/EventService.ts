import http from '../utils/http';

const END_POINT = 'https://backend.etkinlik.io/api/v2';

export interface Base {
	id: number;
	name: string;
	slug: string;
}
export interface Category extends Base {}
export interface Format extends Base {}
export interface Tags extends Base {}
export interface City extends Base {}
export interface District extends Base {}
export interface Venue extends Base {
	address: string;
	city: City;
	district: District;
	lat: number;
	lng: number;
}

export interface Item {
	category: Category;
	content?: string;
	end: string;
	format: Format;
	id: number;
	is_free: boolean;
	name: string;
	poster_url: string;
	slug: string;
	start: string;
	tags: Tags[];
	venue: Venue;
	web_url?: string;
}

export interface EventsResponse {
	items: Item[];
	meta: {
		total_count?: number;
	};
}

export default class EventService {
	static async getEvents(): Promise<EventsResponse> {
		const response = await http(END_POINT + '/events');
		return response.json();
	}
	static async getCities(): Promise<City[]> {
		const response = await http(END_POINT + '/cities');
		return response.json();
	}
	static async getDistrictsByCity(cityId: number): Promise<Format[]> {
		const response = await http(END_POINT + `/cities/${cityId}/districts`);
		return response.json();
	}
	static async getNeighborhoodsByDistrict(districtId: number): Promise<Format[]> {
		const response = await http(END_POINT + `/districts/${districtId}/neighborhoods`);
		return response.json();
	}
	static async getCategories(): Promise<Category[]> {
		const response = await http(END_POINT + '/categories');
		return response.json();
	}
	static async getFormats(): Promise<Format[]> {
		const response = await http(END_POINT + '/formats');
		return response.json();
	}
}
