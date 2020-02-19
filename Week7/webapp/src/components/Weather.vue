<template>
    <span>{{temperature}} F</span>
</template>

<script>
    import Vue from 'vue';
    
    export default {
        name: 'Weather',
        
        data () {
            return {
                temperature: ''
            }
        },

        methods: {
            getTemperature: function() {
                let temperatureApi = 'http://localhost:8081/api/weather/temperature/current';
                // let temperatureApi = 'https://localhost:5001/api/weather/temperature/current';

                Vue.axios.get(temperatureApi).then(
                    (response) => {
                        this.temperature = response.data.f;
                    },
                    (error) => {
                        console.log(error)
                    }
                );  
            }
        },

        mounted() {
            this.getTemperature();
        }
    }
</script>

<style scoped>
</style>