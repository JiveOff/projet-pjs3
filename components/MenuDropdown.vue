<template>
  <div class="relative">
    <button
      @click="toggleDropdown()"
      class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm font-semibold text-left text-white bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:focus:bg-gray-600 dark-mode:hover:bg-gray-600 md:block hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
    >
      <span>{{ $props.name }}</span>
      <svg
        fill="currentColor"
        viewBox="0 0 20 20"
        :class="{ 'rotate-180': dropdownOpen, 'rotate-0': !dropdownOpen }"
        class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-show="dropdownOpen"
        class="transform absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg z-10"
      >
        <div class="px-2 py-2 bg-white rounded-md shadow dark-mode:bg-gray-800">
          <a
            v-for="item in $props.items"
            :key="item.name"
            class="block px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            href="#"
            >{{ item.name }}</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["name", "items"],
  data() {
    return {
      dropdownOpen: false
    };
  },
  methods: {
    closeDropdown() {
      this.dropdownOpen = false;
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen;
      if (this.dropdownOpen) this.$emit("opened");
    }
  }
};
</script>

<style></style>
