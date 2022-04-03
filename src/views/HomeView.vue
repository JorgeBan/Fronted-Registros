<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Bienvenido"/>
    {{username}}
  <form v-on:submit.prevent = 'signOut'>
    <input class="btn btn-danger" type="submit" value="Cerrar sesion">
  </form>
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },

  data: function () {
    return {
      username: '',
    }
  },

  mounted: function (){
    this.username = localStorage.getItem('user')
  },

  methods: {
    signOut() {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      this.$router.push('/login')
    }
  }
}
</script>
