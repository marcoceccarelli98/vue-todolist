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
                },
                {
                    text: 'Spararmi',
                    done: false,
                },
                {
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque praesentium amet quisquam fugit nemo eius ipsa voluptatum deserunt dolor eos. Quasi velit quo itaque sit nulla aliquid placeat explicabo officiis.',
                    done: false,
                },
            ],
        }
    },

    methods: {

    }
}).mount('#app');