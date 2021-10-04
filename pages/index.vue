<template>
  <main class="bg-gray-200 h-screen">
    <div class="md:flex flex-col md:flex-row min-h-screen w-full">
      <Sidebar />
      <div class="flex flex-row md:flex-col flex-wrap m-2 h-full md:w-full">
        <client-only>
          <carousel per-page="1">
            <slide>
              <div
                class="bg-gray-300 rounded-md text-center shadow-md h-auto"
                :style="{
            'background-image': `url(${require('@/assets/images/brehat.png')})`
          }"
              >
                <div
                  class="text-3xl p-10 font-bold tracking-widest text-white uppercase dark-mode:text-white"
                >
                  Bienvenue sur le site de la municipalité
                  <div class="flex justify-center mt-6">
                    <Weather />
                  </div>
                </div>
              </div>
            </slide>
            <slide>
              Slide 2 Content
            </slide>
          </carousel>
        </client-only>
        <div
          class="bg-gray-300 rounded-md w-screen sm:w-full text-center shadow-md mt-3"
          style="background-position: 30% 50%;"
          :style="{
            'background-image': `url(${require('@/assets/images/mairie.png')})`
          }"
        >
          <div
            class="text-3xl p-2 pt-6 font-semibold tracking-widest text-white uppercase dark-mode:text-white"
          >
            Vos services municipaux
          </div>
          <div class="flex justify-center flex-wrap gap-3 p-3">
            <button
              class="bg-yellow-500 text-white text-3xl flex-1 shadow-md p-4 rounded-lg flex flex-col justify-center items-center gap-3"
            >
              <font-awesome-icon icon="calendar" /><span class="text-2xl"
            >Vie quotidienne</span
            >
            </button>
            <button
              class="bg-red-500 text-white text-3xl flex-1 shadow-md p-4 rounded-lg flex flex-col justify-center items-center gap-3"
            >
              <font-awesome-icon icon="cogs" /><span class="text-2xl"
            >Vos démarches</span
            >
            </button>
            <button
              class="bg-purple-500 text-white text-3xl flex-1 shadow-md p-4 rounded-lg flex flex-col justify-center items-center gap-3"
            >
              <font-awesome-icon icon="address-book" /><span class="text-2xl"
            >Nous contacter</span
            >
            </button>
            <button
              class="bg-green-500 text-white text-3xl flex-1 shadow-md p-4 rounded-lg flex flex-col justify-center items-center gap-3"
            >
              <font-awesome-icon icon="phone" /><span class="text-2xl"
            >Numéros utiles</span
            >
            </button>
            <button
              class="bg-pink-500 text-white text-3xl flex-1 shadow-md p-4 rounded-lg flex flex-col justify-center items-center gap-3"
            >
              <font-awesome-icon icon="calendar-alt" /><span class="text-2xl"
            >L'agenda</span
            >
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {
      carouseldata: [
        {
          id: 1,
          message: 'First message',
          content(createElement, content) {
            return createElement('img', {
              attrs: {
                src: require('~/assets/images/blason.png'),
              }
            })
          }
        },
        {
          id: 2,
          message: 'Any message',
          content(createElement, content) {
            return createElement('img', {
              attrs: {
                src: require('~/assets/images/brehat.png'),
              }
            })
          }
        }
      ]
    }
  }
};
</script>
