<template>
	<div class="container">
		<slot />
	</div>
</template>

<style scoped lang="postcss">
.container {
	width: 100%;
	margin-inline: auto;
	padding-inline: 1rem;

	@media (--sm) {
		max-width: 640px;
	}

	@media (--md) {
		max-width: 768px;
	}

	@media (--lg) {
		max-width: 1024px;
	}

	@media (--xl) {
		max-width: 1280px;
	}

	@media (--2xl) {
		max-width: 1536px;
	}
}
</style>
