<template>
  <div id="app">
    <nav class="navbar has-shadow is-spaced" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">
            <img src="./assets/hotelio.png">
          </router-link>
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div class="navbar-menu">
          <div class="navbar-start">
            <router-link class="navbar-item" to="/customers">Clientes</router-link>
            <router-link class="navbar-item" to="/rooms">Habitaciones</router-link>
            <router-link class="navbar-item" to="/reservations">Reservaciones</router-link>
          </div>
          <div class="navbar-end">
            <router-link class="navbar-item" to="/login">Entrar</router-link>
          </div>
        </div>
      </div>
    </nav>
    <router-view @authenticated="setAuthenticated"/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      authenticated: false,
      mockAccount: {
        username: 'username',
        password: 'password',
      },
    };
  },

  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: 'Login' });
    }
  },

  methods: {
    setAutenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
};
</script>

<style>
</style>
