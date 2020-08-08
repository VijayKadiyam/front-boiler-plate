<template>
  <ul>
    <li>
      <router-link 
        :to="{
          'name': 'Home'
        }"
      >
        Home
      </router-link>
    </li>
    <template
      v-if="authenticated"
    >
      <li>
        Vijay Kumar
      </li>
      <li>
        <router-link 
          :to="{
            'name': 'Dashboard'
          }"
        >
          Dashboard
        </router-link>
      </li>
      <li>
        <a href="#" @click.prevent="signOut">
          Signout
        </a>
      </li>
    </template>
    <template
      v-else
    >
      <li>
        <router-link 
          :to="{
            'name': 'Signin'
          }"
        >
          Sign in
        </router-link>
      </li>
    </template>
  </ul>
</template>

<script type="text/javascript">
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      authenticated: 'auth/authenticated',
      user: 'auth/user'
    })
  },
  methods: {
    ...mapActions({
      signOutAction: 'auth/signOut'
    }),
    signOut() {
      this.signOutAction()
        .then(() => {
          this.$router.replace({
            name: 'Signin'
          })
        })
    }
  }
}
</script>