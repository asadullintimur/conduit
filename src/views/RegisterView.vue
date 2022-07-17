<template>
  <div class="auth-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign up</h1>

          <p class="text-xs-center">
            <router-link :to="{ name: 'login' }">Have an account?
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
                <input class="form-control form-control-lg" type="text" placeholder="Your Name"
                       v-model="credentials.username">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="email" placeholder="Email"
                       v-model="credentials.email">
              </fieldset>
              <fieldset class="form-group">
                <input class="form-control form-control-lg" type="password" placeholder="Password"
                       v-model="credentials.password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right"
                      @click.prevent="register">
                Sign up
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
  name: "RegisterView",

  data() {
    return {
      credentials: {
        username: "",
        email: "",
        password: "",
      },
      errors: {},
      isRequestPending: false,
    }
  },

  methods: {
    ...mapActions("auth", {
      authRegister: "register",
    }),

    register() {
      this.isRequestPending = true;

      this.authRegister(this.credentials)
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