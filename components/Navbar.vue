<template>
	<nav class="bg-white shadow-lg w-full rounded-md"
			 :style="{
      		'background-image': `url(${require('@/assets/images/brehat.png')})`,
      		'background-repeat': 'no-repeat'
    		}"
	>
		<div class="max-w-6xl mx-auto px-2">
			<div class="flex justify-between">
				<div class="flex space-x-7">
					<div>
						<!-- Website Logo -->
						<a href="#" class="flex items-center py-4 px-2">
							<div
								class="flex-shrink-0 px-8 py-4 flex flex-row flex-shrink-0 items-stretch items-left flex-1"
							>
								<img
									src="~/assets/images/blason.png"
									alt="Blason de la municipalité"
									class="block w-10 mb-2"
								/>
								<div class="flex flex-col justify-left ml-5">
									<span
										class="text-white text-md font-light tracking-widest uppercase dark-mode:text-black"
									>Municipalité de</span
									>
									<nuxt-link
										to="index"
										class="text-lg font-semibold tracking-widest text-white uppercase dark-mode:text-white"
									>Île-de-Bréhat</nuxt-link
									>
								</div>
							</div>
							<!--
							<img src="logo.png" alt="Logo" class="h-8 w-8 mr-2">
							<span class="font-semibold text-gray-500 text-lg">Navigation</span>-->
						</a>
					</div>
					<!-- Primary Navbar items -->
					<div class="hidden md:flex items-center space-x-1">
						<nuxt-link to='/' class="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Accueil</nuxt-link>
						<nuxt-link to='elus' class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Elus</nuxt-link>
						<a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
						<a href="" class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact Us</a>
					</div>
				</div>
				<!-- Secondary Navbar items -->
				<div class="hidden md:flex items-center space-x-3 ">
					<a href="" class="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</a>
					<a href="" class="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a>
				</div>
				<!-- Mobile menu button -->
				<div class="md:hidden flex items-center">
					<button class="outline-none" @click='mobileMenu = !mobileMenu'>
						<svg class=" w-6 h-6 text-gray-500 hover:text-green-500 "
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
		<div :class="{ hidden: !mobileMenu }">
			<ul class="">
				<li class="active"><a href="index.html" class="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
				<li><a href="#services" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
				<li><a href="#about" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
				<li><a href="#contact" class="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
			</ul>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'Navbar',
	data() {
		return {
			mobileMenu: false
		}
	}
};
</script>

<style scoped>

</style>