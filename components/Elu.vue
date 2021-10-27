<template>
	<div class="flex flex-col gap-4 align-middle items-center">
		<div
			class="w-24 h-24 overflow-y-hidden rounded-full flex items-center"
			@mouseover="hovering = true"
			@mouseleave="hovering = false"
		>
			<transition name="fade" mode="in-out">
				<div
					v-if="hovering"
					class="absolute rounded-full w-24 h-24 bg-blue-900 opacity-70 text-white flex items-center justify-center cursor-pointer"
					@click="openModal"
				>
					<div class="text-5xl">
						<font-awesome-icon icon="search" />
					</div>
				</div>
			</transition>
			<transition name="modal">
				<div class="modal-mask" v-if="popup">
					<div class="modal-wrapper" @click="popup = false">
						<div class="modal-container">
							<div class="modal-header">
								<button class="modal-default-button" @click="popup = false">
									<font-awesome-icon icon="times-circle" />
								</button>
								<slot name="header">
									{{ elu.nom }}
								</slot>
							</div>

							<div class="modal-body">
								<slot name="body">
									<img :src="elu.portrait" style="width: 20%; margin-right: 20px; float: right;" />
									<span>{{ elu.description }}</span>
								</slot>
							</div>
						</div>
					</div>
				</div>
			</transition>
			<img :src="elu.portrait" style="height: fit-content" />
		</div>
		<div class="text-center">
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
	props: ['elu'],
	data() {
		return {
			hovering: false,
			popup: false,
		};
	},
	methods: {
		openModal() {
			this.popup = true;
			setTimeout(() => {
				this.hovering = false;
			}, 200);
		},
	},
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
	opacity: 0;
}

.modal-mask {
	position: fixed;
	z-index: 9998;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	display: table;
	transition: opacity 0.3s ease;
}

.modal-wrapper {
	display: table-cell;
	vertical-align: middle;
}

.modal-container {
	width: 450px;
	margin: 0px auto;
	padding: 20px 30px;
	background-color: #fff;
	border-radius: 20px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
	transition: all 0.3s ease;
}

.modal-header {
	margin-top: 0;
	color: #1a237e;
	font-size: 170%;
}

.modal-body {
	margin: 20px 0;
}

.modal-default-button {
	float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
	opacity: 0;
}

.modal-leave-active {
	opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
	-webkit-transform: scale(1.1);
	transform: scale(1.1);
}
</style>
