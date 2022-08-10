<script setup lang="ts">
import { Item } from '../services/EventService';

const props = defineProps<{
	data: Item;
}>();
</script>
<template>
	<div class="event-card">
		<div class="event-card__image">
			<img :src="props.data.poster_url" alt="" />
			<div class="badges">
				<span v-if="props.data.format?.name" class="badge event-format">{{ props.data.format.name }}</span>
				<span v-if="props.data.category?.name" class="badge event-category">{{
					props.data.category.name
				}}</span>
				<span v-if="props.data.is_free" class="badge free-badge">Ücretsiz</span>
			</div>
		</div>
		<div class="event-card__content">
			<h3 class="event-card__title">{{ props.data.name }}</h3>
			<div class="event-card__location">
				<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M14 6.66675C14 10.0818 10.7869 13.1398 9.06335 14.5345C8.4357 15.0424 7.5643 15.0424 6.93665 14.5345C5.21308 13.1398 2 10.0818 2 6.66675C2 5.07545 2.63214 3.54933 3.75736 2.42411C4.88258 1.29889 6.4087 0.666748 8 0.666748C9.5913 0.666748 11.1174 1.29889 12.2426 2.42411C13.3679 3.54933 14 5.07545 14 6.66675Z"
						fill="#716E90"
					/>
					<path
						d="M8 8.66675C9.10457 8.66675 10 7.77132 10 6.66675C10 5.56218 9.10457 4.66675 8 4.66675C6.89543 4.66675 6 5.56218 6 6.66675C6 7.77132 6.89543 8.66675 8 8.66675Z"
						fill="white"
					/>
				</svg>
				{{ props.data.venue.address }}
			</div>
			<div class="event-card__meta">
				<span class="event-card__date"></span>
				<span class="event-card__time"></span>
			</div>
		</div>
	</div>
</template>

<style scoped lang="postcss">
.event-card {
	background: #ffffff;
	box-shadow: 0 8px 30px rgba(80, 85, 136, 0.06);
	border-radius: 18px;
	padding: 10px;

	.event-card__image {
		height: 130px;
		border-radius: 10px;
		overflow: hidden;
		position: relative;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		.badges {
			position: absolute;
			top: 8px;
			left: 8px;
			display: grid;
			justify-items: flex-start;
			gap: 4px;

			.badge {
				background: rgba(255, 255, 255, 0.7);
				backdrop-filter: blur(6px);
				border-radius: 7px;
				padding: 0.3rem 0.5rem;
				font-size: 0.7rem;
				color: #fff;

				&.free-badge {
					background: #00b300;
				}

				&.event-category {
					background: #f59762;
				}

				&.event-format {
					background: #f0635a;
				}
			}
		}
	}
	.event-card__content {
		padding: 10px;
		.event-card__title {
			font-size: 1rem;
			font-weight: 500;
			color: #000000;
			margin-bottom: 5px;
		}
		.event-card__location {
			display: flex;
			align-items: center;
			gap: 5px;
			font-size: 0.8rem;
			color: #716e90;

			& > * {
				flex-shrink: 0;
				flex-grow: 0;
			}
		}
	}
}
</style>
