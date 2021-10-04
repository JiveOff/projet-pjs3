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
				</div>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	name: "Index"
};
</script>
