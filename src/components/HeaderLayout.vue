<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand"
                   :to="{
            name: 'home'
          }">conduit
      </router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link"
                       :to="{
            name: 'home'
          }">Home
          </router-link>
        </li>

        <template
            v-if="isAuthenticated">
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-compose"></i>&nbsp;New Article
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </a>
          </li>
        </template>

        <li class="nav-item">
          <router-link class="nav-link"
                       :to="{
                          name: 'login'
                       }">
            Sign in
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link"
                       :to="{
            name: 'register'
          }">Sign up
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: "HeaderLayout",

  computed: {
    ...mapState("user", [
      "isAuthenticated"
    ])
  }
}
</script>

<style scoped>

</style>