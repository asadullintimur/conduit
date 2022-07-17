<template>

  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset
                :disabled="isRequestPending">
              <fieldset>
                <fieldset class="form-group">
                  <input class="form-control" type="text" placeholder="URL of profile picture"
                         v-model="user.image">
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg" type="text" placeholder="Your Name"
                         v-model="user.username">
                </fieldset>
                <fieldset class="form-group">
                            <textarea class="form-control form-control-lg" rows="8"
                                      placeholder="Short bio about you" v-model="user.bio"></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg" type="text" placeholder="Email"
                         v-model="user.email">
                </fieldset>
                <fieldset class="form-group">
                  <input class="form-control form-control-lg" type="password" placeholder="New Password"
                         v-model="user.password">
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right"
                        @click.prevent="update">
                  Update Settings
                </button>
              </fieldset>
            </fieldset>
          </form>

          <hr>

          <button class="btn btn-outline-danger"
                  @click="logout">
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "SettingsView",

  data() {
    return {
      user: {},
      isRequestPending: false,
    }
  },

  computed: {
    ...mapState("auth", {
      authUser: "user",
    })
  },

  methods: {
    ...mapActions("auth", ["logout", "updateUser"]),

    update() {
      this.isRequestPending = true;

      this.updateUser(this.user)
          .finally(() => this.isRequestPending = false)
          .then(user => {
            this.$router.push({
              name: "profile",
              params: {
                username: user.username
              }
            })
          })
    }
  },

  created() {
    this.user = {
      ...this.authUser,
      password: "",
    };

    delete this.user.token;
  }
}
</script>

<style scoped>

</style>