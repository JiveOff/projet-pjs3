<template>
	<main class="bg-gray-200 h-screen">
		<div class="md:flex flex-col md:flex-row min-h-screen w-full">
			<Sidebar />
			<div class="flex flex-row md:flex-col flex-wrap m-2 h-full md:w-full">
				<div
					class="bg-white rounded-md w-screen sm:w-full text-center shadow-md"
				>
					<div
						class="text-3xl p-2 pt-6 font-semibold tracking-widest uppercase"
					>
						Vos élus
					</div>
					<div class="flex justify-center flex-wrap gap-14 p-3">
						<elu v-for="elu in elus" :key="elu.nom" :elu="elu" />
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
// https://codepen.io/aruizh/pen/bmwBLy

export default {
	name: "Elus",
	data() {
		return {
			elus: [
				{
					nom: "Olivier Carré",
					fonction: "Maire",
					portrait: "https://www.iledebrehat.fr/wp-content/uploads/2021/01/Olivier-portrait.jpg",
					description: "68 ans, marié, père de deux enfants et grand-père de quatre petits-enfants. Diplôme d’ingénieur des travaux publics, retraité, a travaillé pendant 35 ans comme ingénieur sur barge puis directeur opérationnel de l’entreprise dans les travaux maritimes sur toutes les mers du globe.\n\nPropriétaire depuis 2010 sur l’île, résident à l’année depuis début 2020."
				}
			]
		}
	}
};
</script>
