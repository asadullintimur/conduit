<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign in</h1>
          <p class="text-xs-center">
            <router-link :to="{
              name: 'register'
            }">Need an account?
            </router-link>
          </p>

          <ul class="error-messages">
            <li
                v-for="error in errors"
                :key="error">{{ error }}
            </li>
          </ul>

          <form>
            <fieldset :disabled="isRequestPending">
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="email" placeholder="Email"
                       v-model="credentials.email">
              </fieldset>

              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="password" placeholder="Password"
                       v-model="credentials.password">
              </fieldset>

              <button class="btn btn-lg btn-primary pull-xs-right"
                      @click.prevent="(login)">
                Sign in
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "LoginView",

  data() {
    return {
      credentials: {
        username: "",
        password: "",
      }
    }
  },

  methods: {
    ...mapActions("auth", {
      authInit: "init",
      auth: "auth"
    }),

    login() {
      this.auth({
        credentials: this.credentials,
        type: "login"
      }).then(() => this.$router.push({name: 'home'}))
    }
  },

  computed: {
    ...mapState("auth", ["errors", "isRequestPending"]),
  },

  created() {
    this.authInit()
  },
}
</script>

<style scoped>
</style>