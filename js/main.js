'use strict';

const { createApp } = Vue;

createApp({
    data() {
        return {
            list: [
                {
                    text: 'Comprare il latte',
                    done: false,
                },
                {
                    text: 'Appuntamento in banca alle 14:30',
                    done: true,
                }
            ],
        }
    },

    methods: {

    }
}).mount('#app');