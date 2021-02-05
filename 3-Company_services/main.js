// const app = Vue.createApp({});
const app = Vue.createApp({
    data() {
        return {
            name: 'item',
        }
    },
    methods: {
        add() {
            return this.name;
        },
        reduce() {
            if (this.name === '') {
                return 'empty name';
            } else {
                this.name = "mata";
            }
        }
    },
});

app.amount('#App');