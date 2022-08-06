<template>
  <div>
    <div>
      <div>
        <div>
          <img src="" alt="course-cover">
        </div>
        <h3>SQL Server實戰效能調校第四部曲：縱橫交易處理</h3>
      </div>

      <div>
        <div>
          <div class="">7,900</div>
          <div>5,900</div>
          <div>募資優惠</div>
        </div>
        <button type="button">
          <img src="@/assets/images/delete.svg" alt="delete icon">
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsCartItem',
  props: {
    data: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
  },
  mounted() {
  },
  methods: {
  }
})
</script>

<style lang="scss">
</style>
