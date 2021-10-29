<template>
	<div class="w-full mt-4">
		<client-only>
			<carousel
				ref="carousel"
				per-page="1"
				autoplay="true"
				autoplayTimeout="5000"
				autoplayHoverPause="true"
				paginationColor="#a8a8a8"
				paginationActiveColor="black"
				@pageChange="changePage"
			>
				<slide>
					<div class="rounded-md text-center sm:text-left h-auto">
						<div
							class="text-3xl p-10 font-bold tracking-widest text-black uppercase flex flex-col md:flex-row gap-8 items-center dark-mode:text-white"
						>
							<div class="flex-grow">
								Bienvenue sur le site de la municipalité de l'<b>Île-de-Bréhat</b>
								<div class="mt-5 text-xl font-normal flex flex-col items-center md:items-start">
									La mairie est à votre écoute et à votre disposition pour toutes vos questions.
									<button
										class="bg-red-500 text-white mt-5 text-xl flex-1 shadow-md p-2 pr-4 pl-4 rounded-lg flex flex-row justify-center items-center gap-3"
									>
										<font-awesome-icon icon="cog" /><span class="text-xl"
											>Vos démarches</span
										></button
									><button
										class="bg-purple-500 text-white mt-5 text-xl flex-1 shadow-md p-2 pr-4 pl-4 rounded-lg flex flex-row justify-center items-center gap-3"
									>
										<font-awesome-icon icon="address-book" /><span class="text-xl"
											>Nous contacter</span
										>
									</button>
								</div>
							</div>
							<div
								class="flex justify-center mt-6 p-5 rounded-md h-full"
								:style="{
									'background-image': `url(${require('@/assets/images/brehat.png')})`,
									'background-repeat': 'no-repeat',
									'background-position': '50% -116px',
								}"
							>
								<Weather />
							</div>
						</div>
					</div>
				</slide>
				<slide>
					<div class="rounded-md text-center sm:text-left h-auto">
						<div
							class="text-3xl p-10 font-bold tracking-widest text-black uppercase flex flex-col md:flex-row gap-8 items-center dark-mode:text-white"
						>
							<div>
								Découvrez l'<b>Île-de-Bréhat</b>
								<div class="mt-5 text-xl font-normal flex flex-col items-center md:items-start">
									L'Île vous offre un cadre paradisiaque et convivial. Reservez vos places dans nos
									activités dès maintenant.
									<button
										class="bg-pink-500 text-white mt-5 text-xl flex-1 shadow-md p-2 pr-4 pl-4 rounded-lg flex flex-row justify-center items-center gap-3"
									>
										<font-awesome-icon icon="calendar-alt" /><span class="text-xl">L'agenda</span>
									</button>
								</div>
							</div>
							<div
								class="flex justify-center mt-6 p-5 rounded-md h-full"
								:style="{
									'background-image': `url(${require('@/assets/images/brehat.png')})`,
									'background-repeat': 'no-repeat',
									'background-position': '50% -116px',
								}"
							>
								<iframe
									class="w-full md:w-96"
									height="318"
									src="https://www.youtube.com/embed/8lYS7yPmO5g"
									title="YouTube video player"
									frameborder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									allowfullscreen
								></iframe>
							</div>
						</div>
					</div>
				</slide>
				<slide>
					<div class="rounded-md text-center h-auto">
						<div
							class="text-3xl p-10 font-bold tracking-widest text-black uppercase flex flex-col gap-8 items-center dark-mode:text-white"
						>
							"Sans doute l'une des plus belles îles de France"
							<div class="text-xl font-normal">
								Recommandé par le site "Stereden"
							</div>
							<div class="flex flex-col md:flex-row gap-4">
								<div
									v-for="image in images"
									:key="image"
									class="flex justify-center mt-6 p-32 rounded-md h-full"
									:style="{
										'background-image': `url(${image})`,
										'background-repeat': 'no-repeat',
										'background-size': 'cover',
										'background-position': '50% 50%',
									}"
								></div>
							</div>
						</div>
					</div>
				</slide>
			</carousel>
		</client-only>
		<div
			class="bg-gray-300 rounded-md text-center shadow-md mt-3"
			style="background-position: 30% 50%;"
			:style="{
				'background-image': `url(${require('@/assets/images/mairie.png')})`,
			}"
		>
			<div
				class="text-3xl p-2 pt-6 font-semibold tracking-widest text-white uppercase dark-mode:text-white"
			>
				Liens utiles
			</div>
			<div class="flex justify-center flex-wrap gap-3 p-3">
				<button
					class="bg-yellow-500 text-white text-3xl flex-1 shadow-md p-4 rounded-lg flex flex-col justify-center items-center gap-3"
				>
					<font-awesome-icon icon="calendar" /><span class="text-2xl">Vie quotidienne</span>
				</button>
				<button
					class="bg-red-500 text-white text-3xl flex-1 shadow-md p-4 rounded-lg flex flex-col justify-center items-center gap-3"
				>
					<font-awesome-icon icon="cog" /><span class="text-2xl">Vos démarches</span>
				</button>
				<button
					class="bg-purple-500 text-white text-3xl flex-1 shadow-md p-4 rounded-lg flex flex-col justify-center items-center gap-3"
				>
					<font-awesome-icon icon="address-book" /><span class="text-2xl">Nous contacter</span>
				</button>
				<button
					class="bg-green-500 text-white text-3xl flex-1 shadow-md p-4 rounded-lg flex flex-col justify-center items-center gap-3"
				>
					<font-awesome-icon icon="phone" /><span class="text-2xl">Numéros utiles</span>
				</button>
				<button
					class="bg-pink-500 text-white text-3xl flex-1 shadow-md p-4 rounded-lg flex flex-col justify-center items-center gap-3"
				>
					<font-awesome-icon icon="calendar-alt" /><span class="text-2xl">L'agenda</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Index',
	data() {
		return {
			images: [
				'https://www.stereden.com/usermedia/photo-634461518674591613-1.jpg?dummy=0&crop=True&w=586&h=350',
				'https://www.stereden.com/usermedia/photo-634461518629195322-1.jpg?dummy=0&h=800',
				'https://www.stereden.com/usermedia/photo-634461518684731678-1.jpg?dummy=0&crop=True&w=586&h=350',
			],
		};
	},
	methods: {
		changePage(num) {
			if (num === 2) {
				this.$refs.carousel.autoplayDirection = 'backward';
			} else if (num === 0) {
				this.$refs.carousel.autoplayDirection = 'forward';
			}
		},
	},
};
</script>
