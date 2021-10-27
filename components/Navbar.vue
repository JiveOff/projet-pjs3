<template>
	<nav
		class="bg-white shadow-lg w-full rounded-md rounded-br-none rounded-bl-none transition-all"
		:class="$nuxt.$route.name == 'index' ? 'text-white' : 'text-black'"
		:style="{
			'background-image':
				$nuxt.$route.name == 'index' ? `url(${require('@/assets/images/brehat.png')})` : '',
			'background-repeat': 'no-repeat',
			'background-size': 'cover',
		}"
	>
		<div class="max-w-6xl mx-auto px-2">
			<div class="flex justify-center">
				<div class="flex space-x-7">
					<div>
						<!-- Website Logo -->
						<nuxt-link to="/" class="flex items-center py-4 px-2">
							<div
								class="flex-shrink-0 px-8 py-4 flex flex-row flex-shrink-0 items-stretch items-left flex-1"
							>
								<img
									src="~/assets/images/blason.png"
									alt="Blason de la municipalité"
									class="block w-10 mb-2"
								/>
								<div class="flex flex-col justify-left ml-5">
									<span class="text-md font-light tracking-widest uppercase">Municipalité de</span>
									<nuxt-link to="/" class="text-lg font-semibold tracking-widest uppercase"
										>Île-de-Bréhat</nuxt-link
									>
								</div>
							</div>
							<!--
							<img src="logo.png" alt="Logo" class="h-8 w-8 mr-2">
							<span class="font-semibold text-gray-500 text-lg">Navigation</span>-->
						</nuxt-link>
					</div>
					<!-- Primary Navbar items -->
					<div class="hidden md:flex items-center space-x-1">
						<div
							class="rounded-md p-2 text-white"
							:style="{
								'background-image':
									$nuxt.$route.name != 'index'
										? `url(${require('@/assets/images/brehat.png')})`
										: '',
								'background-repeat': 'no-repeat',
								'background-size': 'cover',
							}"
						>
							<nuxt-link
								v-for="route in routes"
								:key="route.name"
								:to="route.path"
								class="py-4 px-2 transition duration-75"
								:class="
									$nuxt.$route.name == route.path ? 'border-b-4 border-white-500 font-semibold' : ''
								"
								>{{ route.name }}</nuxt-link
							>
						</div>
					</div>
				</div>
				<!-- Mobile menu button -->
				<div class="md:hidden flex items-center">
					<button class="outline-none" @click="mobileMenu = !mobileMenu">
						<svg
							class="w-6 h-6 mr-5"
							x-show="!showMenu"
							fill="none"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M4 6h16M4 12h16M4 18h16"></path>
						</svg>
					</button>
				</div>
			</div>
		</div>
		<!-- mobile menu -->
		<div :class="{ hidden: !mobileMenu }" class="md:hidden">
			<ul class="bg-white text-black">
				<li v-for="route in routes" :key="route.name">
					<nuxt-link :to="route.path" class="block text-sm px-2 py-4 font-semibold"
						><span
							:class="{ 'font-bold border-b-2 border-black': $nuxt.$route.name == route.path }"
							>{{ route.name }}</span
						></nuxt-link
					>
				</li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Navbar',
	data() {
		return {
			mobileMenu: false,
			routes: [
				{
					name: 'Accueil',
					path: '/',
				},
				{
					name: 'Elus',
					path: 'elus',
				},
				{
					name: 'Vos services',
					path: '/',
				},
				{
					name: 'Numéros utiles',
					path: 'numeros',
				},
				{
					name: 'Agenda',
					path: '/',
				},
				{
					name: 'Contact',
					path: 'contact',
				},
			],
		};
	},
};
</script>

<style scoped></style>
