<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>

          <p class="text-xs-center">
            <a href="#login">Have an account?
            </a>
          </p>

          <ul class="error-messages">
            <li
                v-for="error in errors"
                :key="error">{{ error }}
            </li>
          </ul>

          <form>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Your Name"
                     v-model="credentials.username">
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="text" placeholder="Email"
                     v-model="credentials.email">
            </fieldset>
            <fieldset class="form-group">
              <input class="form-control form-control-lg" type="password" placeholder="Password"
                     v-model="credentials.password">
            </fieldset>
            <button class="btn btn-lg btn-primary pull-xs-right"
                    @click.prevent="register(credentials)">
              Sign up
            </button>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapState} from "vuex";

export default {
  name: "RegisterView",

  data() {
    return {
      credentials: {
        username: "",
        email: "",
        password: "",
      }
    }
  },

  methods: {
    ...mapActions("register", ["init", "register"])
  },

  computed: {
    ...mapState("register",  ["errors"])
  },

  created() {
    this.init()
  }
}

</script>

<style scoped>

</style>