import { defineStore } from 'pinia';
import { ref } from 'vue';
import { EventsResponse } from '../services/EventService';

export const useEvent = defineStore('event', () => {
	const data = ref<EventsResponse>({
		items: [],
		meta: {
			total_count: 0,
		},
	});

	function set(events: EventsResponse) {
		data.value = events;
	}

	return { data, set };
});
