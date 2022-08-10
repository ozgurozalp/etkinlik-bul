<script setup lang="ts">
import { onMounted } from 'vue';
import { useEvent } from './stores/event';
import EventService from './services/EventService';
import EventCard from './components/EventCard.vue';
import Sidebar from './components/Sidebar.vue';

const eventStore = useEvent();

onMounted(async () => {
	const events = await EventService.getEvents();
	eventStore.set(events);
});
</script>

<template>
	<section class="layout">
		<Sidebar />
		<div class="etkinlik">
			<EventCard v-for="event in eventStore.data.items" :data="event" />
		</div>
	</section>
</template>

<style>
.etkinlik {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 1rem;
	padding: 1rem;
	overflow: auto;
	scroll-behavior: smooth;
	scroll-snap-type: y mandatory;
	scroll-padding: 1rem;
}
.etkinlik > * {
	scroll-snap-align: start;
}

.layout {
	max-height: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: 300px 1fr;
	grid-template-rows: 1fr;
}
</style>
