<template>
  <header
    class="sticky top-0 left-0 inset-x-0 z-50 flex items-center bg-white h-[50px]"
  >
    <div class="container flex justify-between items-center px-[15px]">
      <div class="flex items-center">
        <!-- Header Logo -->
        <div class="w-[66px] md:w-[100px] mr-[9px]">
          <img class="w-full" src="@/assets/images/logo.webp" alt="logo" />
        </div>

        <div v-if="!isLogin" class="hidden md:flex md:items-center">
          <div class="w-[80px] mr-[16px]">
            <img
              class="w-full"
              src="@/assets/images/recruit.webp"
              alt="徵才中"
            />
          </div>
          <div class="flex items-center mr-[16px]">
            <img
              class="block w-[20px] mr-[4px]"
              src="@/assets/images/grid.svg"
            />
            課程
          </div>
        </div>

        <div class="relative pl-[20px]">
          <input class="hidden md:block" type="text" placeholder="搜尋" />
          <img
            class="absolute top-1/2 left-0 transform -translate-y-1/2 w-[20px]"
            src="@/assets/images/search.svg"
          />
        </div>
      </div>

      <template v-if="isLogin">
        <div class="hidden md:flex md:items-center">
          <button type="button" class="mr-[16px] text-gray-600">我想開課</button>
          <button type="button" class="mr-[16px] text-gray-600">我想學習</button>
          <button type="button" class="mr-[16px]">
            <img src="@/assets/images/cart.svg" alt="購物車" />
          </button>
          <div class="w-[32px]">
            <img class="w-full" :src="user.avatar" alt="大頭貼" />
          </div>
        </div>
      </template>

      <template v-else>
        <div class="hidden md:flex md:items-center">
          <button type="button" class="mr-[16px] text-gray-600">我想開課</button>

          <div class="flex items-center">
            <button
              type="button"
              class="rounded-md text-sm text-primary border border-primary w-[64px] h-[32px] mr-[16px]"
              @click="$emit('showLogin')"
            >
              登入
            </button>
            <button
              type="button"
              class="rounded-md text-sm text-white border border-primary bg-primary w-[64px] h-[32px] mr-[16px]"
              @click="$emit('showLogin')"
            >
              註冊
            </button>
          </div>
        </div>
      </template>

      <div class="flex items-center md:hidden">
        <button type="button" class="mr-[13px] md:mr-[38px]">
          <img src="@/assets/images/cart.svg" alt="購物車" />
        </button>

        <hamburger
          class="block mt-[2px] md:hidden"
          :active="showMenu"
          @show="showMenu = $event"
        />
      </div>

      <!-- menu -->
      <transition name="fade">
        <div
          v-if="showMenu"
          class="md:hidden fixed top-[49px] inset-x-0 z-[9998] overflow-auto max-h-[calc(100vh-49px)] bg-[#E5E5E5]"
        >
          <template v-if="isLogin">
            <div class="bg-[#EFF5F8] px-[14px]">
              <div
                class="flex items-center pt-[40px] pb-[32px] border-b border-[#D9D9D9]"
              >
                <div
                  class="w-[40px] h-[40px] rounded-full overflow-hidden mr-[20px]"
                >
                  <img
                    class="img-center"
                    src="https://picsum.photos/seed/picsum/50/50"
                    alt="大頭貼"
                  />
                </div>
                <h3 class="text-gray-700 font-medium">Mike Chen</h3>
              </div>

              <nav>
                <ul class="pt-[16px] pb-[16px]">
                  <li>
                    <button type="button" class="py-[16px] text-gray-700">
                      我的課程
                    </button>
                  </li>
                  <li>
                    <button type="button" class="py-[16px] text-gray-700">
                      我的抵用券
                    </button>
                  </li>
                  <li>
                    <button type="button" class="py-[16px] text-gray-700">
                      任務板
                    </button>
                  </li>
                  <li>
                    <button type="button" class="py-[16px] text-gray-700">
                      訂單記錄
                    </button>
                  </li>
                  <li>
                    <button type="button" class="py-[16px] text-gray-700">
                      帳戶設定
                    </button>
                  </li>
                  <li>
                    <button type="button" class="py-[16px] text-gray-700">
                      我開設的課
                    </button>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="bg-[#FAFAFA] px-[14px]">
              <button
                type="button"
                class="block w-full py-[32px] text-gray-700 text-left border-b border-[#D9D9D9]"
              >
                探索課程
              </button>
              <button
                type="button"
                class="block w-full py-[32px] text-gray-700 text-left"
              >
                登出
              </button>
            </div>
          </template>

          <template v-else>
            <nav>
              <ul class="pt-[23px] pb-[16px] border-b border-[#D9D9D9]">
                <li>
                  <button type="button" class="py-[16px] text-gray-700">
                    探索課程
                  </button>
                </li>
                <li>
                  <button type="button" class="py-[16px] text-gray-700">
                    企業方案
                  </button>
                </li>
              </ul>
            </nav>

            <ul>
              <li>
                <button
                  type="button"
                  class="py-[16px] text-gray-700"
                  @click="$emit('showLogin')"
                >
                  登入
                </button>
              </li>
              <li>
                <button
                  type="button"
                  class="py-[16px] font-medium text-primary"
                  @click="$emit('showLogin')"
                >
                  註冊
                </button>
              </li>
            </ul>
          </template>
        </div>
      </transition>
    </div>
  </header>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { User } from '@/interfaces'
import Hamburger from '@/components/Hamburger.vue'

export default Vue.extend({
  name: 'ComponentsHeader',
  components: {
    Hamburger,
  },
  props: {
    user: {
      type: Object as PropType<User>,
      default: () => ({}),
    },
  },
  data() {
    return {
      showMenu: false,
    }
  },
  computed: {
    isLogin() {
      // @ts-ignore:next-line
      return this.$store.getters.isLogin
    },
  },
  watch: {
    showMenu(newShow) {
      if (newShow) {
        document.body.style.overflow = 'hidden'
        return
      }
      document.body.style.overflow = 'auto'
    },
  },
  mounted() {},
  methods: {},
})
</script>

<style lang="scss">
header {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
}
</style>
