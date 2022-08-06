<template>
  <div class="container">
    <div class="flex justify-between items-center">
      <div class="w-[68%] box-border pr-[16px]">
        <h2>購物車</h2>
        <div class="">
          <div class="grid grid-cols-12">
            <h4 class="col-span-5">項目</h4>
            <h4 class="col-span-3">售價</h4>
            <h4 class="col-span-2">結帳金額</h4>
          </div>

          <div class="grid grid-cols-12">
            <h4 class="col-span-5">
              <div>
                <img src="https://picsum.photos/seed/picsum/240/136" alt="course-cover">
              </div>
              <h3>SQL Server實戰效能調校第四部曲：縱橫交易處理</h3>
            </h4>
            <h4 class="col-span-3">售價</h4>
            <h4 class="col-span-2">結帳金額</h4>
          </div>
        </div>
      </div>

      <div class="w-[32%]">
        <h3>小計</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { login, getCourses,getMe } from "@/services/api";
import { setToken } from "@/utils";

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    dsa() {
      return {}
    }
  },
  async mounted() {
    await this.login()
    this.me()
    this.fetchCourses()
  },
  methods: {
    async login() {
      try {
        const data = await login({
          account: 'Cheeto',
          password: 'dsadsa123123',
          confirm: true
        })
        setToken(data.access_token)
        console.log('login', data)
      } catch (error) {
        console.log('login error ', error)
      }
    },
    async me() {
      try {
        const data = await getMe()
        this.$store.commit('setUser', data)

        console.log(this.$store.state.user);
        
      } catch (error) {
        console.log('me error ', error)
      }
    },
    async fetchCourses() {
      try {
        const data = await getCourses()
        console.log('fetchCourses', data)
      } catch (error) {
        console.log('fetchCourses error ', error)
      }
    }
  }
})
</script>

<style lang="scss">

</style>
