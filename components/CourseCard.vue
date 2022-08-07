<template>
  <div class="rounded overflow-hidden hiskio-shadow">
    <div class="course-card-header relative">
      <img
        class="img-center"
        src="https://picsum.photos/seed/picsum/280/153"
        alt="課程圖片"
      />

      <button type="button" class="absolute right-[45px] bottom-[7px]">
        <img class="w-[18px]" src="@/assets/images/favorite.svg" />
      </button>

      <button type="button" class="cart-icon absolute right-[8px] bottom-[7px]">
        <img class="w-[25px] cart-icon" src="@/assets/images/cart.svg" />
      </button>
    </div>

    <div class="course-card-content pt-[12px] px-[12px] pb-[9px]">
      <h3 class="text-xl leading-[29px] text-[#454545] font-medium mb-[5px]">
        NUXT.js 前端開發實戰手冊前端開發前端開發前
      </h3>

      <div class="flex items-center mb-[5px]">
        <div class="w-[37px] h-[37px] rounded-full overflow-hidden mr-[12px]">
          <img
            class="img-center"
            src="https://picsum.photos/seed/picsum/50/50"
            alt="導師大頭貼"
          />
        </div>
        <h4 class="text-[#8C8C8C]">Chris</h4>
      </div>

      <div class="mb-[10px]">
        <div class="flex justify-between text-sm text-[#595959] mb-[6px]">
          <div>剩 3 天</div>
          <div>已募資55%</div>
        </div>

        <div class="relative rounded-full overflow-hidden h-[10px]">
          <div class="bg-[#F0F0F0] absolute inset-0"></div>
          <div
            class="progress-bar-active absolute inset-y-0 w-[50%] rounded-full"
          ></div>
        </div>
      </div>

      <div class="flex items-center">
        <div class="font-medium text-[22px] text-[#434343] mr-[5px]">
          $1,500
        </div>
        <div class="text-sm text-[#BFBFBF]">$5,500</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsCourseCard',
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {},
  mounted() {},
  methods: {},
})
</script>

<style lang="scss">
.course-card-header {
  aspect-ratio: (280 / 153);

  .cart-icon {
    ::deep {
      fill: #ffffff;
    }
  }
}

.course-card-content {
  .progress-bar-active {
    background: linear-gradient(90deg, #eb6767 0%, #e34a4a 100%);
  }
}
</style>
