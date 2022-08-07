<template>
  <div
    class="rounded overflow-hidden hiskio-shadow pt-[12px] pb-[2px] px-[10px] md:p-0"
  >
    <div class="flex md:block items-center mb-[11px] md:mb-0">
      <div
        class="course-card-header relative w-[140px] h-[70px] md:w-full md:h-auto mr-[8px] md:mr-0 rounded-lg md:rounded-none overflow-hidden"
      >
        <img
          class="img-center"
          :src="course.image"
          alt="課程圖片"
        />

        <button
          type="button"
          class="hidden md:block absolute right-[45px] bottom-[7px]"
        >
          <img class="w-[18px]" src="@/assets/images/favorite.svg" />
        </button>

        <button
          type="button"
          class="cart-icon hidden md:block absolute right-[8px] bottom-[7px]"
        >
          <img class="w-[25px] cart-icon" src="@/assets/images/cart.svg" />
        </button>
      </div>

      <div
        class="course-card-content relative flex-1 md:pt-[12px] md:px-[12px] md:pb-[9px]"
      >
        <h3
          class="hidden md:block text-xl leading-[29px] text-[#454545] font-medium mb-[5px]"
        >
          {{ course.title }}
        </h3>

        <div
          class="absolute top-0 right-0 md:static flex items-center mb-[5px]"
        >
          <div
            class="w-[23px] h-[23px] md:w-[37px] md:h-[37px] md:mr-[12px] rounded-full overflow-hidden"
          >
            <img
              class="img-center"
              :src="currentLecturer?.avatar"
              alt="導師大頭貼"
            />
          </div>
          <h4 class="hidden md:block text-[#8C8C8C]">{{ currentLecturer?.username }}</h4>
        </div>

        <div class="mb-[12px] md:mb-[10px]">
          <div
            class="flex justify-between text-sm text-[#595959] mb-[12px] md:mb-[6px]"
          >
            <div class="hidden md:block">剩 3 天</div>
            <div>已募資55%</div>
          </div>

          <div
            class="relative rounded-full overflow-hidden w-[70px] h-[6px] md:w-full md:h-[10px]"
          >
            <div class="bg-[#F0F0F0] absolute inset-0"></div>
            <div
              class="progress-bar-active absolute inset-y-0 w-[50%] rounded-full"
            ></div>
          </div>
        </div>

        <div class="flex items-center">
          <div
            class="text-sm text-[#434343] font-medium md:text-[22px] mr-[5px]"
          >
            $1,500
          </div>
          <div class="text-sm text-[#BFBFBF] line-through">$5,500</div>
        </div>
      </div>
    </div>

    <h3 class="md:hidden font-medium text-[#454545]">
      {{ course.title }}
    </h3>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import dayjs from "dayjs";
import _ from "lodash";
import { Course } from '@/interfaces';

export default Vue.extend({
  name: 'ComponentsCourseCard',
  props: {
    course: {
      type: Object as PropType<Course>,
      required: true
    },
  },
  data() {
    return {}
  },
  computed: {
    currentPrices() {
      return _.find(this.course.prices, price => dayjs().isBefore(dayjs(price.schedule_at)))
    },
    currentLecturer() {
      return _.head(this.course.lecturers)
    }
  },
  mounted() {},
  methods: {},
})
</script>

<style lang="scss">
.course-card-header {
}

.course-card-content {
  .progress-bar-active {
    background: linear-gradient(90deg, #eb6767 0%, #e34a4a 100%);
  }
}

@media (min-width: 768px) {
  .course-card-header {
    aspect-ratio: (280 / 153);
  }
}
</style>
