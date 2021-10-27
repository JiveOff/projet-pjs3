<template>
	<main class="h-screen">
		<GlobalAlert />
		<div class="md:flex flex-col md:flex-row min-h-screen w-full">
			<div class="flex flex-row md:flex-col flex-wrap m-2 h-full md:w-full">
				<Navbar />
				<transition name="slide-fade" mode="out-in"><router-view></router-view></transition>
				<Footer />
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: 'default',
};
</script>

<style>
body {
	background-color: #e5e5e5;
}
</style>
