const {createApp} = Vue;

createApp({
    data(){
        return{
            email:[],
        }
    },
    methods:{
        fetchData(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp)=>{
                console.log(resp.data.response);
                this.email.push(resp.data.response);
            })
        },
        generaDieci(){
            for (let i = 0; i < 10; i++) {
                this.fetchData()
            }
        }
    }
}).mount("#app");