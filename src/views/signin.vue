<template>
  <div>
    <form @submit.prevent="submit">
      <label>Email: </label>
      <input type="text" name="email" v-model="form.email">
      <br><br>
      <label>Password: </label>
      <input type="password" name="password" v-model="form.password">
      <br><br>
      <button type="submit">Signin</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Signin',
  data () {
    return {
      form: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn'
    }),
    submit() {
      this.signIn(this.form)
        .then(() => {
          this.$router.replace({
            name: 'Dashboard'
          })
        })
        .catch(() => {
          console.log('failed')
        })

      
    }
  }
}
</script>
