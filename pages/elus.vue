<template>
	<div>
		<div
			class="bg-white rounded-md rounded-tr-none rounded-tl-none text-center shadow-md mb-5 pb-4"
		>
			<div class="text-3xl p-2 pt-6 font-semibold tracking-widest uppercase">
				Vos élus
			</div>
		</div>
		<div
			class="flex justify-center flex-wrap gap-5 p-5 rounded-md bg-fixed"
			:style="{
				'background-image': `url(${require('@/assets/images/brehat.png')})`,
				'background-size': 'cover',
				'background-repeat': 'no-repeat',
				'background-position': '50% 50%',
			}"
		>
			<elu
				v-for="elu in elus"
				:key="elu.nom"
				:elu="elu"
				class="shadow-md bg-white rounded-md p-3 flex flex-shrink flex-grow md:flex-grow-0"
			/>
		</div>
	</div>
</template>

<script>
// https://codepen.io/aruizh/pen/bmwBLy

export default {
	name: 'Elus',
	data() {
		return {
			elus: [
				{
					nom: 'Olivier Carré',
					fonction: 'Maire',
					portrait: 'https://www.iledebrehat.fr/wp-content/uploads/2021/01/Olivier-portrait.jpg',
					description:
						'68 ans, marié, père de deux enfants et grand-père de quatre petits-enfants. Diplôme d’ingénieur des travaux publics, retraité, a travaillé pendant 35 ans comme ingénieur sur barge puis directeur opérationnel de l’entreprise dans les travaux maritimes sur toutes les mers du globe.\n\nPropriétaire depuis 2010 sur l’île, résident à l’année depuis début 2020.',
				},
				{
					nom: 'Gabrielle Cojean-Prigent',
					fonction: '1ère adjointe',
					portrait:
						'https://www.iledebrehat.fr/wp-content/uploads/2020/11/gabrielle-COjean-Prigent.jpg',
					description:
						'44 ans, 3 enfants, aide-médico psychologique , travaille à l’EHPAD depuis 21 ans. Présidente de l’association « Les Amis de Kreiz Ar Mor », dont le but est d’améliorer le quotidien des résidents de l’EHPAD.\n\nRésidente à l’année depuis plus de 20 ans.',
				},
				{
					nom: 'François-Yves Le Thomas',
					fonction: '2ème adjoint',
					portrait: 'https://www.iledebrehat.fr/wp-content/uploads/2021/01/FY-portrait.jpg',
					description:
						'64 ans. Retraité, ancien pilote des vedettes, ancien enseignant au lycée maritime de Paimpol. Habite sur l’île à temps complet depuis plus de dix ans.',
				},
				{
					nom: 'Dominique Sicher',
					fonction: '3ème adjointe',
					portrait: 'https://www.iledebrehat.fr/wp-content/uploads/2021/01/Dom-portrait.jpg',
					description:
						'50 ans, en couple avec trois enfants, réside sur l’île à l’année depuis 4 ans.\n\nIngénieur technico-commercial dans l’électronique, titulaire du brevet Capitaine 200. Organisateur de balades en mer et de découvertes du milieu maritime sur le vieux gréement Eulalie depuis près de 20 ans. Trésorier de l’amicale laïque de l’école.',
				},
				{
					nom: 'Stéphan Morlevat',
					fonction: 'Conseiller municipal délégué',
					portrait: 'https://www.iledebrehat.fr/wp-content/uploads/2021/01/Steph-portrait.jpg',
					description:
						'54 ans, vit sur l’île de Bréhat depuis 19 ans avec sa compagne et ses 2 enfants.\n\nArrivé sur l’île en tant que directeur du centre de vacances Les Rocs, puis gérant du magasin de souvenirs et d’artisanat local Bleu dans l’Île, au Port-Clos. Ancien président de l’office de tourisme. Pompier volontaire depuis 15 ans.',
				},
				{
					nom: 'Marion Régler',
					fonction: 'Conseillère municipale',
					portrait: 'https://www.iledebrehat.fr/wp-content/uploads/2021/01/marion-portrait.jpg',
					description:
						'36 ans, vit depuis plus de 10 ans sur Bréhat. Titulaire d’un master en géographie agricole, associée au sein de la ferme de Kervilon, vice-trésorière de l’association Fert’île.',
				},
				{
					nom: 'Jean-Philippe Outin',
					fonction: 'Conseiller municipal',
					portrait: 'https://www.iledebrehat.fr/wp-content/uploads/2021/01/Jean-Phi-portrait-1.jpg',
					description:
						'46 ans. Habite à Bréhat depuis dix ans.\n\nGardien et responsable de la fondation Haraucourt, serveur au restaurant du Crec’h Kerio en saison. Président de l’association Fert’île.',
				},
				{
					nom: 'Charlotte Pilon-Le Lain',
					fonction: 'Conseillère municipale',
					portrait:
						'https://www.iledebrehat.fr/wp-content/uploads/2021/01/Charlotte-portrait-2.jpg',
					description:
						'Mariée et maman de deux enfants, 32 ans. Installée à Bréhat depuis quatre ans après avoir vécu en Nouvelle Calédonie.\n\nInfirmière à la maison de retraite ainsi que sapeur-\npompier au centre de secours de l’île.',
				},
				{
					nom: 'Aymeric Lamy',
					fonction: 'Conseiller municipal de la minorité',
					portrait: 'https://www.iledebrehat.fr/wp-content/uploads/2021/01/Aymeric-portrait.jpg',
					description:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repellat consequatur suscipit excepturi illo, cum sint voluptatibus eum vero autem nobis modi porro sed inventore sequi consequuntur quo! Magnam, culpa!',
				},
				{
					nom: 'Jean-Luc Le Pache',
					fonction: 'Conseiller municipal de la minorité',
					portrait: 'https://www.iledebrehat.fr/wp-content/uploads/2021/01/Le-pache-portrait.jpg',
					description:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repellat consequatur suscipit excepturi illo, cum sint voluptatibus eum vero autem nobis modi porro sed inventore sequi consequuntur quo! Magnam, culpa!',
				},
				{
					nom: 'Dominique Thormann',
					fonction: 'Conseiller municipal de la minorité',
					portrait: 'https://www.iledebrehat.fr/wp-content/uploads/2021/01/thormann-portrait.jpg',
					description:
						'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias repellat consequatur suscipit excepturi illo, cum sint voluptatibus eum vero autem nobis modi porro sed inventore sequi consequuntur quo! Magnam, culpa!',
				},
			],
		};
	},
};
</script>
