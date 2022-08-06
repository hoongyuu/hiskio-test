<template>
  <div class="relative bg-[#e5e5e5]">
    <Header :user="me" />

    <Nuxt/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  computed: {
    me() {
      return this.$store.state.user
    }
  },
  mounted() {
  },
})
</script>

<style lang="scss">

</style>
