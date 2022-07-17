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
                      @click.prevent="login">
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
import {mapActions} from "vuex";
import {normalizeErrors} from "@/services/helpers";

export default {
  name: "LoginView",

  data() {
    return {
      credentials: {
        username: "",
        password: "",
      },
      isRequestPending: false,
      errors: {}
    }
  },

  methods: {
    ...mapActions("auth", {
      authLogin: 'login'
    }),

    login() {
      this.isRequestPending = true;

      this.authLogin(this.credentials)
          .finally(() => this.isRequestPending = false)
          .then(() => this.$router.push({name: 'home'}))
          .catch(({data}) => {
            this.errors = normalizeErrors(data.errors);
          })
    }
  },
}
</script>

<style scoped>
</style>