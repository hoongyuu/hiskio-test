<template>
  <div class="relative bg-[#e5e5e5]">
    <Header :user="me" @showLogin="showLogin = true" />

    <Nuxt />

    <login-dialog :show="showLogin" @close="showLogin = false" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import LoginDialog from '@/components/LoginDialog.vue'

export default Vue.extend({
  name: 'LayoutDefault',
  components: {
    LoginDialog,
  },
  data() {
    return {
      showLogin: false,
    }
  },
  computed: {
    me() {
      return this.$store.state.user
    },
  },
  mounted() {},
})
</script>

<style lang="scss"></style>
