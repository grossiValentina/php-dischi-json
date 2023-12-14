const {createApp} = Vue;

createApp({
    data(){
        return {
            cdList: [],
            apiUrl: "server.php",
        }

    },

    created(){
        axios.get(this.apiUrl).then((resp) => {
            this.cdList = resp.data;
            console.log(resp);

        })
    },

    methods: {

    }

}).mount("#app");