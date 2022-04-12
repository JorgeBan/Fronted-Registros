<template>
        <div>
            <h1>Por favor, verifica tu email para poder acceder a la aplicación</h1>
                <button class="btn btn-danger" v-on:click="signOut">Regresar</button>
        </div>     
</template>

<script>
export default {
    name: 'ConfirmEmail',
    mounted: function (){
        if(!localStorage.getItem('token')){
            this.$router.push('/login')
        }else if(localStorage.getItem('status') == 'VERIFIED'){
            this.$router.push('/')
        }
    },
    methods: {
        signOut() {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            localStorage.removeItem('status')
            this.$router.push('/login')
        } ,

        sendCode() {
            
        }
    }
}
</script>