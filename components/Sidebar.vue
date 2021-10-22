<template>
  <div
    class="flex flex-row w-full text-gray-700 dark-mode:text-gray-200 dark-mode:bg-gray-800 flex-shrink-0 mb-3 rounded-md bg-center shadow-xl"
    :style="{
      'background-image': `url(${require('@/assets/images/brehat.png')})`,
      'background-repeat': 'no-repeat'
    }"
  >
    <div
			:class='{"sm:flex-col": open, "sm:flex-row": !open}'
      class="flex-shrink-0 px-8 py-4 flex flex-shrink-0 items-stretch items-left flex-1"
    >
      <img
        src="~/assets/images/blason.png"
        alt="Blason de la municipalité"
        class="block w-10 mb-2"
      />
      <div class="flex flex-col justify-left ml-5">
        <span
          class="text-white text-md font-light tracking-widest uppercase dark-mode:text-black"
          >Municipalité de</span
        >
        <nuxt-link
          to="index"
          class="text-lg font-semibold tracking-widest text-white uppercase dark-mode:text-white"
          >Île-de-Bréhat</nuxt-link
        >
      </div>
      <button
        class="rounded-lg text-white md:hidden focus:outline-none focus:shadow-outline flex-grow"
        @click="open = !open"
      >
        <svg
          fill="currentColor"
          viewBox="0 0 20 20"
          class="w-6 h-6 float-right"
        >
          <path
            v-if="!open"
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
          <path
            v-else
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <nav
      class="flex-grow flex items-center px-4 pb-4 md:pb-0 sm:hidden"
    >
      <!-- <a
        class="block px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg dark-mode:bg-gray-700 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
        href="#"
        >Accueil</a
      > -->
      <nuxt-link
        class="block px-4 py-2 mt-2 text-sm font-semibold text-white bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
				to='/'
        >Accueil</nuxt-link
      >
      <MenuDropDown
        name="La municipalité"
        ref="munici"
        :items="[
          { name: 'Les élus', router: 'elus' },
          { name: 'Vos services', router: 'services' }
        ]"
        @opened="$refs.contact.closeDropdown()"
      />
      <nuxt-link
        class="block px-4 py-2 mt-2 text-sm font-semibold text-white bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
				to='actus'
        >Les actualités de l'île</nuxt-link
      >
      <MenuDropDown
        name="Nous contacter"
        ref="contact"
        :items="[
          { name: 'Formulaire', router: 'form' },
          { name: 'Numéros utiles', router: 'numeros' }
        ]"
        @opened="$refs.munici.closeDropdown()"
      />
    </nav>
  </div>
</template>

<script>
import MenuDropDown from "./MenuDropdown.vue";

export default {
  components: { MenuDropDown },
  data: () => {
    return {
      open: false,
      dropdownOpened: ""
    };
  }
};
</script>
