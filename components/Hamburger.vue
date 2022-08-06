<template>
  <div
    :class="['hamburger', {
      'is-active': active
    }]
  ">
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ComponentsHamburger',
  props: {
    active: {
      type: Boolean,
      required: true
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
.hamburger {
  .line{
    width: 50px;
    height: 5px;
    background-color: #ecf0f1;
    display: block;
    margin: 8px auto;
    transition: all 0.3s ease-in-out;
  }

  &.is-active {
    .line {
      &:nth-child(2){
        opacity: 0;
      }
      &:nth-child(1){
        transform: translateY(13px) rotate(45deg);
      }
      &:nth-child(3){
        transform: translateY(-13px) rotate(-45deg);
      }
    }
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
