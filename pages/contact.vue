<template>
	<div>
		<div
			class="bg-white rounded-md rounded-tr-none rounded-tl-none text-center shadow-md mb-5 pb-4"
		>
			<div class="text-3xl p-2 pt-6 font-semibold tracking-widest uppercase">
				Nous contacter
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
			<Contact />
		</div>
	</div>
</template>

<script>
export default {
	name: 'contacts',
};
</script>
