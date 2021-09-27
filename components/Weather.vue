<template>
    <div v-if="weather" class="bg-white p-3 text-black text-sm rounded-md">
        Température à Île-de-Brehat<span style="display: block; padding: 15px; font-size: 42px;">{{ weather.temperature }}</span>
    </div>
</template>

<script>
export default {
    data() {
        return {
            weather: null
        }
    },
    mounted() {
        this.getWeather()
    },
    methods: {
        async getWeather() {
            let res = await this.$axios.get("https://goweather.herokuapp.com/weather/%C3%8Ele-de-Br%C3%A9hat")
            this.weather = res.data;
        }
    }
}
</script>