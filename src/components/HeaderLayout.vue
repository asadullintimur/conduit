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
            <router-link class="nav-link"
            :to="{
              name: 'editor'
            }">
              <i class="ion-compose"></i>&nbsp;New Article
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link"
                         :to="{
              name: 'settings'
            }">
              <i class="ion-gear-a"></i>&nbsp;Settings
            </router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link"
                         :to="{
              name: 'profile',
              params: {
                username: user.username
              }
            }">
              {{ user.username }}
            </router-link>
          </li>
        </template>

        <template
            v-else>
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
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapState} from "vuex"

export default {
  name: "HeaderLayout",

  computed: {
    ...mapState("auth", [
      "isAuthenticated",
      "user"
    ])
  }
}
</script>

<style scoped>

</style>