<template>
  <div class="">
    <div class="bg-[#FAFAFA] pt-[20px] md:pt-[80px]">
      <div
        class="px-[14px] pb-[25px] md:pb-[180px] container md:flex md:justify-between"
      >
        <div class="mb-[50px] md:mr-[16px] md:mb-0 md:w-[calc(68%-16px)]">
          <h2
            class="text-xl md:text-[24px] font-medium text-gray-700 mb-[20px]"
          >
            購物車
          </h2>
          <div class="hiskio-shadow bg-white md:rounded-[10px]">
            <div
              class="hidden md:grid md:grid-cols-12 text-lg text-gray-500 text-center pt-[12px] pb-[8px]"
            >
              <h4 class="col-span-6 text-left pl-[12px]">項目</h4>
              <h4 class="col-span-3">售價</h4>
              <h4 class="col-span-2">結帳金額</h4>
            </div>

            <div
              v-for="(cart, index) in carts.data"
              :key="cart.id"
              class="px-[12px] py-[20px] md:pr-0 md:grid md:grid-cols-12 md:border-t md:border-[#D9D9D9]"
              :class="{
                'border-t border-[#E5E5E5]': index >= 1,
              }"
            >
              <div class="md:col-span-6">
                <div class="flex items-center md:items-start mb-[12px] md:mb-0">
                  <div class="rounded overflow-hidden mr-[8px] md:mr-[12px]">
                    <div class="w-[62px] h-[34px] md:w-[120px] md:h-[68px]">
                      <img
                        class="img-center"
                        :src="cart.image"
                        alt="course-cover"
                      />
                    </div>
                  </div>
                  <h3
                    class="flex-1 text-sm text-gray-600 md:text-md leading-[18px] md:leading-[22px] mr-[27px] md:mr-0"
                  >
                    {{ cart.name }}
                  </h3>

                  <button
                    type="button"
                    class="md:hidden min-w-[24px]"
                    @click="deleteCart(cart.id)"
                  >
                    <img
                      src="@/assets/images/delete.svg"
                      alt="delete icon"
                      class="w-full"
                    />
                  </button>
                </div>
              </div>

              <div class="hidden md:block md:col-span-3">
                <div class="flex flex-col justify-center items-center h-full">
                  <div
                    v-if="cart.subtotal !== cart.total"
                    class="text-sm text-gray-400 line-through"
                  >
                    {{ getThousandSeparator(cart.subtotal) }}
                  </div>
                  <div class="text-lg text-gray-500">
                    {{ getThousandSeparator(cart.total) }}
                  </div>
                  <div
                    v-if="cart.subtotal !== cart.total"
                    class="text-sm text-gray-700 rounded border border-gray-700 px-[3px]"
                  >
                    募資優惠
                  </div>
                </div>
              </div>

              <div
                class="flex justify-between items-center md:block md:col-span-2"
              >
                <div class="flex items-center md:hidden">
                  <div class="text-sm text-gray-500 mr-[6px]">
                    {{ getThousandSeparator(cart.total) }}
                  </div>
                  <div
                    v-if="cart.subtotal !== cart.total"
                    class="text-xs text-gray-700 rounded border border-gray-700 px-[3px]"
                  >
                    募資優惠
                  </div>
                </div>
                <div
                  class="font-medium md:font-normal text-gray-600 flex justify-center items-center h-full"
                >
                  {{ getThousandSeparator(cart.total) }}
                </div>
              </div>

              <div class="hidden md:block md:col-span-1">
                <div class="flex justify-center items-center h-full">
                  <button type="button">
                    <img
                      src="@/assets/images/delete.svg"
                      alt="delete icon"
                      @click="deleteCart(cart.id)"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="md:w-[32%]">
          <h3
            class="text-xl md:text-[24px] font-medium text-gray-700 mb-[25px] md:mb-[20px]"
          >
            小計
          </h3>
          <div
            class="hiskio-shadow bg-white rounded-[10px] pt-[13px] px-[16px] pb-[20px]"
          >
            <div
              class="pb-[85px] md:pb-[22px] mb-[16px] border-b border-[#D9D9D9]"
            >
              <div class="mb-[20px]">
                <h4 class="text-gray-500 mb-[10px] md:mb-0">輸入折扣代碼</h4>
                <div class="flex">
                  <input
                    type="text"
                    class="flex-1 md:flex-none border border-gray-400 rounded mr-[12px] px-[8px] h-[40px] md:w-[calc(100%-76px)] md:min-h-full"
                  />
                  <button
                    type="button"
                    class="hidden md:flex md:justify-center md:items-center rounded text-hiskio-red bg-[#FFE6E6] w-[76px] h-[40px]"
                  >
                    確定
                  </button>
                </div>
              </div>

              <button type="button">
                <span class="underline text-gray-600">選擇抵用券</span>
              </button>
            </div>

            <div class="">
              <div class="flex justify-between mb-[52px] md:mb-[10px]">
                <h4 class="text-gray-500">金額</h4>
                <span class="text-sm text-gray-600"
                  >${{ getThousandSeparator(carts.subtotal || 0) }}</span
                >
              </div>

              <div
                class="text-right text-[28px] text-gray-700 md:text-[32px] mb-[15px] md:mb-[5px]"
              >
                ${{ getThousandSeparator(carts.total || 0) }}
              </div>

              <button
                type="button"
                class="w-full text-center py-[8px] mb-[12px] bg-hiskio-red text-white rounded"
              >
                前往結帳
              </button>

              <p class="text-xs text-gray-500">
                點擊上方按鈕即表示您已閱讀並同意
                <span class="underline">「 HiSKIO購買與退費政策」</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-[#F5F5F5] pt-[32px] pb-[24px] md:pb-[70px] rounded-t-[10px]">
      <div class="container px-[14px]">
        <h2 class="text-xl md:text-[24px] font-medium text-gray-700 mb-[20px]">
          募資課程
        </h2>

        <div class="md:grid md:grid-cols-4 md:gap-4">
          <course-card
            v-for="course in courses"
            :key="course.id"
            :course="course"
            class="mb-[12px] md:mb-0"
            @addCart="addCart"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import _ from 'lodash'
import {
  login,
  getCourses,
  getMe,
  getCarts,
  deleteCart,
  addCart,
} from '@/services/api'
import { setToken, getThousandSeparator } from '@/utils'
import CourseCard from '@/components/CourseCard.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    CourseCard,
  },
  data() {
    return {
      courses: [],
      carts: {},
    }
  },
  computed: {
    isLogin() {
      // @ts-ignore:next-line
      return this.$store.getters.isLogin
    },
  },
  watch: {
    isLogin(newVal) {
      if (!newVal) {
        return
      }

      this.getCarts()
    }
  },
  async mounted() {
    // @ts-ignore:next-line
    await this.$store.dispatch('fetchUser')
    this.fetchCourses()
  },
  methods: {
    getThousandSeparator,
    async login() {
      try {
        const data = await login({
          account: 'Cheeto',
          password: 'dsadsa123123',
          confirm: true,
        })
        setToken(data.access_token)
        console.log('login', data)
      } catch (error) {
        console.log('login error ', error)
      }
    },
    async fetchCourses() {
      try {
        const data = await getCourses()
        this.courses = data
        console.log('fetchCourses', data)
      } catch (error) {
        console.log('fetchCourses error ', error)
      }
    },
    async getCarts() {
      try {
        const data = await getCarts()
        this.carts = data
        console.log('getCarts ', data)
        console.log('this.carts', this.carts)
      } catch (error) {
        console.log('getCarts error', error)
      }
    },
    async addCart(id: number) {
      try {
        const data = await addCart({
          items: [{ id, coupon: '' }],
          coupons: [],
        })
        this.getCarts()
        console.log('addCart ', data)
      } catch (error) {
        console.log('addCart error ', error)
      }
    },
    deleteCart: _.debounce(async function (id: number) {
      try {
        const data = await deleteCart({
          items: [{ id, coupon: '' }],
          coupons: [],
        })
        // @ts-ignore:next-line
        this.getCarts()
        console.log('deleteCart ', data)
      } catch (error) {
        console.log('deleteCart error', error)
      }
    }, 200),
  },
})
</script>

<style lang="scss"></style>
