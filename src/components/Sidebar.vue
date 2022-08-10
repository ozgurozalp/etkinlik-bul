<template>
	<section class="sidebar">
		<form action="">
			<div class="search-input">
				<input type="search" placeholder="Etkinlik arayın..." />
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
						stroke="#120D26"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						opacity="0.4"
						d="M20.9999 20.9999L16.6499 16.6499"
						stroke="#120D26"
						stroke-width="2.5"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
		</form>
	</section>
</template>

<style scoped lang="postcss">
.search-input {
	position: relative;

	& > svg {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 1rem;
	}

	input:focus {
		outline-color: #f59762;
	}
}

.sidebar {
	background: #fff;
	padding: 1rem;
	box-shadow: 0 40px 60px rgb(211 209 216 / 50%);
}
</style>
