<template>
  <header
    class="
      sticky top-0 left-0 inset-x-0 z-50
      flex items-center
      bg-white 
      h-[50px]
    "
  >
    <div class="container flex justify-between items-center">
      <div class="flex items-center">
        <div class="w-[100px] mr-[9px]">
          <img class="w-full" src="@/assets/images/logo.webp" alt="logo">
        </div>

        <template v-if="!isLogin">
          <div class="w-[80px] mr-[16px]">
            <img class="w-full" src="@/assets/images/recruit.webp" alt="徵才中">
          </div>
          <div class="flex items-center mr-[16px]">
            <img class="block w-[20px] mr-[4px]" src="@/assets/images/grid.svg">
            課程
          </div>
        </template>

        <div class="relative pl-[20px]">
          <input type="text" placeholder="搜尋">
          <img class="absolute top-1/2 left-0 transform -translate-y-1/2 w-[20px]" src="@/assets/images/search.svg">
        </div>
      </div>

      <template v-if="isLogin">
        <div class="flex items-center">
          <button type="button" class="mr-[16px]">我想開課</button>
          <button type="button" class="mr-[16px]">我想學習</button>
          <button type="button" class="mr-[16px]">
            <img src="@/assets/images/cart.svg" alt="購物車">
          </button>
          <div class="w-[32px]">
            <img class="w-full" :src="user.avatar" alt="大頭貼">
          </div>
        </div>
      </template>

      <template v-else>
        <div class="flex items-center">
          <button type="button" class="mr-[16px]">我想開課</button>
          <button type="button" class="mr-[38px]">
            <img src="@/assets/images/cart.svg" alt="購物車">
          </button>

          <div class="flex items-center">
            <button 
              type="button" 
              class="rounded-md text-sm text-[#178FAC] border border-[#178FAC] w-[64px] h-[32px] mr-[16px]"
            >
              登入
            </button>
            <button 
              type="button" 
              class="rounded-md text-sm text-white border border-[#178FAC] bg-[#178FAC] w-[64px] h-[32px] mr-[16px]"
            >
              註冊
            </button>
          </div>
        </div>
      </template>
    </div>
  </header>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { User } from '@/interfaces'

export default Vue.extend({
  name: 'ComponentsHeader',
  props: {
    user: {
      type: Object as PropType<User>,
      default: () => ({})
    }
  },
  data() {
    return {
      isLogin: true
    }
  },
  mounted() {
  },
  methods: {
  }
})
</script>

<style lang="scss">
header {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
}
</style>
