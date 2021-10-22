<template>
	<main class="h-screen">
		<GlobalAlert />
		<div class="md:flex flex-col md:flex-row min-h-screen w-full">
			<div class="flex flex-row md:flex-col flex-wrap m-2 h-full md:w-full">
				<Navbar />
				<router-view />
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

.slide-fade-enter-active {
	transition: all .3s ease;
}
.slide-fade-leave-active {
	transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active below version 2.1.8 */ {
	transform: translateY(10px);
	opacity: 0;
}
</style>