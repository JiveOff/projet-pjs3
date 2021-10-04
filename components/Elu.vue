<template>
    <div class="flex align-middle items-center">
		<div class="w-24 h-24 overflow-y-hidden rounded-full flex items-center" @mouseover="hovering = true" @mouseleave="hovering = false">
			<transition name="fade" mode="in-out">
				<div v-if="hovering" class="absolute rounded-full w-24 h-24 bg-blue-900 opacity-70 text-white">
					<div style="transform: translateY(calc((96px / 2) - 12px))">
						<font-awesome-icon icon="search" />
					</div>
			    </div>
			</transition>
			<img :src="elu.portrait" style="height: fit-content">
		</div>
		<div class="text-left ml-5">
			<span class="text-4xl">
				{{ elu.nom }}
			</span>
		    <span class="block text-xl"> 
			    {{ elu.fonction }}
			</span>
		</div>
	</div>
</template>

<script>
export default {
    props: ["elu"],
    data() {
        return {
            hovering: false
        }
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>