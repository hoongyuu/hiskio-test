<template>
  <transition name="fade">
    <div
      v-if="show"
      class="login-dialog bg-black bg-opacity-70 fixed inset-0 z-[9999] flex justify-center items-center"
    >
      <div
        class="login-container relative w-full md:w-auto max-w-[450px] max-h-screen md:rounded-xl bg-white bg-contain bg-top bg-no-repeat overflow-auto"
      >
        <div
          class="w-[320px] md:w-full mx-auto pt-[40px] pb-[20px] md:px-[65px]"
        >
          <div class="mx-auto w-[120px] mb-[30px]">
            <img class="w-full" src="@/assets/images/logo.webp" alt="Logo" />
          </div>

          <div class="button-group flex mb-[18px]">
            <button
              type="button"
              class="active text-[32px] text-[#D9D9D9] font-medium w-1/2 text-center pb-[8px]"
            >
              登入
            </button>
            <button
              type="button"
              class="text-[32px] text-[#D9D9D9] font-medium w-1/2 text-center pb-[8px]"
            >
              註冊
            </button>
          </div>

          <ul class="mb-[24px]">
            <li class="mb-[12px]">
              <button
                type="button"
                class="flex items-center pl-[17%] text-[#595959] w-full rounded border border-[#BFBFBF] py-[10px]"
              >
                <div class="w-[28px] mr-[12px]">
                  <img
                    class="w-full"
                    src="@/assets/images/facebook.webp"
                    alt="Facebook"
                  />
                </div>
                使用 Facebook 登入
              </button>
            </li>
            <li class="mb-[12px]">
              <button
                type="button"
                class="flex items-center pl-[17%] text-[#595959] w-full rounded border border-[#BFBFBF] py-[10px]"
              >
                <div class="w-[28px] mr-[12px]">
                  <img
                    class="w-full"
                    src="@/assets/images/google.webp"
                    alt="Google"
                  />
                </div>
                使用 Google 登入
              </button>
            </li>
            <li class="mb-[12px]">
              <button
                type="button"
                class="flex items-center pl-[17%] text-[#595959] w-full rounded border border-[#BFBFBF] py-[10px]"
              >
                <div class="w-[28px] mr-[12px]">
                  <img
                    class="w-full"
                    src="@/assets/images/github.webp"
                    alt="Github"
                  />
                </div>
                使用 Github 登入
              </button>
            </li>
            <li class="">
              <button
                type="button"
                class="flex items-center pl-[17%] text-[#595959] w-full rounded border border-[#BFBFBF] py-[10px]"
              >
                <div class="w-[28px] mr-[12px]">
                  <img
                    class="w-full"
                    src="@/assets/images/linkedin.webp"
                    alt="Linkedin"
                  />
                </div>
                使用 LinkedIn 登入
              </button>
            </li>
          </ul>

          <div>
            <h3 class="text-[#595959] font-medium text-center mb-[18px]">
              使用 HiSKIO ID 登入
            </h3>

            <div class="mb-[20px]">
              <div class="flex items-center py-[10px] mb-[8px]">
                <img
                  class="block w-[20px] mr-[8px]"
                  src="@/assets/images/account.svg"
                />
                <input
                  v-model="form.account"
                  type="text"
                  placeholder="請輸入 HiSKIO ID"
                  class="flex-1 text-sm"
                  @blur="handleValidate('account')"
                />
              </div>

              <div class="flex items-center py-[10px]">
                <img
                  class="block w-[20px] mr-[8px]"
                  src="@/assets/images/lock.svg"
                />
                <input
                  v-model="form.password"
                  type="text"
                  placeholder="請輸入登入密碼"
                  class="flex-1 text-sm"
                  @blur="handleValidate('password')"
                />
              </div>
            </div>

            <div class="flex items-center mb-[26px]">
              <input type="checkbox" class="mr-[6px]" />
              <p class="text-sm text-[#8C8C8C] mb-[2px]">
                登入註冊即代表您同意<span class="underline cursor-pointer"
                  >使用者及隱私權政策</span
                >
              </p>
            </div>

            <button
              type="button"
              class="w-full py-[8px] text-center rounded-md bg-[#178FAC] text-white mb-[20px]"
              @click="login"
            >
              登入
            </button>

            <button
              type="button"
              class="w-full text-center rounded-md text-[#8C8C8C]"
            >
              忘記密碼
            </button>
          </div>

          <button
            class="absolute top-[30px] right-[30px] w-[13px]"
            @click="$emit('close')"
          >
            <img src="@/assets/images/close.svg" class="w-full" />
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from 'vue'
import _ from 'lodash'
import { setToken, validate, account as accountRule, password as passwordRule } from '@/utils'
import { login } from '@/services/api'

const DEFAULT_FORM = {
  account: '',
  password: ''
}

const rules = {
  account: accountRule,
  password: passwordRule,
};

export default Vue.extend({
  name: 'ComponentsLoginDialog',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      form: _.cloneDeep(DEFAULT_FORM),
      errorMessage: '',
    }
  },
  watch: {
    show(newShow) {
      if (newShow) {
        document.body.style.overflow = 'hidden'
        return
      }
      document.body.style.overflow = 'auto'
    },
  },
  mounted() {
    
  },
  methods: {
    async login() {
      if (!(await this.handleValidate())) {
        return
      }

      try {
        const data = await login({
          account: this.form.account,
          password: this.form.password,
          confirm: true,
        })
        setToken(data.access_token)
        console.log('login', data)
        this.$emit('close')
      } catch (error) {
        console.log('login error ', error)
      }
    },
    async handleValidate(type?: string): Promise<boolean> {
      const descriptor = type ? _.pick(rules, [type]) : rules;
      const form = type ? _.pick(this.form, [type]) : this.form;

      if (_.isEmpty(descriptor)) {
        return false;
      }
      const { errors } = await validate(descriptor, form);

      // 驗證通過
      if (!errors) {
        this.errorMessage = '';
        return true;
      }

      // 驗證失敗
      const message = _.get(_.head(errors), 'message', '');
      this.errorMessage = message;
      console.log('errors ', errors)

      return false;
    }
  },
})
</script>

<style lang="scss">
.login-container {
  background-image: url('@/assets/images/bg-login.webp');

  .button-group {
    button.active {
      @apply relative text-[#178FAC];

      &::after {
        @apply absolute left-1/2 bottom-0
          transform -translate-x-1/2
          w-[80px] h-[4px]
          bg-[#178FAC];
        content: '';
      }
    }
  }
}
</style>
