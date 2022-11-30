const {createApp} = Vue;

createApp({
    data(){
        return{
            email:[],
            emailTotali:[],
        }
    },
    methods:{
        fetchData(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((resp)=>{
                this.email.push(resp.data.response);
                if (this.email.length == 10) {
                    this.emailTotali = this.email;
                }
            })
        },
        generaDieci(){
            for (let i = 0; i < 10; i++) {
                this.fetchData()
            }
        }
    }
}).mount("#app");