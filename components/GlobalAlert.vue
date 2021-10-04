<template>
	<div v-if="open" class="bg-red-700 text-white w-full p-3">
		<font-awesome-icon icon="exclamation-triangle" />
		<span class="ml-2">Attention Coronavirus: L'Île-de-Bréhat vous accueille sous les directives nationales, le pass sanitaire reste exiger dans les espaces publiques.</span>
		<!--<a href='#' class='float-right' @click='open = false'><font-awesome-icon icon="times" /></a>-->
	</div>
</template>

<script>
export default {
	name: 'GlobalAlert',
	data() {
		return {
			open: true
		}
	}
};
</script>

<style scoped>

</style>