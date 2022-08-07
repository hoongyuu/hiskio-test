<template>
  <div
    :class="[
      'hamburger',
      {
        'is-active': active,
      },
    ]"
    @click="$emit('show', !active)"
  >
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
      required: true,
    },
  },
  data() {},
  mounted() {},
  methods: {},
})
</script>

<style lang="scss">
.hamburger {
  .line {
    width: 18px;
    height: 2px;
    background-color: #8c8c8c;
    display: block;
    margin: 8px auto;
    border-radius: 9999px;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      margin: 0 auto 4px;
    }
    &:nth-child(2) {
      margin: 4px auto;
    }
    &:nth-child(3) {
      margin: 4px auto 0;
    }
  }

  &.is-active {
    .line {
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(1) {
        transform: translateY(6px) rotate(45deg);
      }
      &:nth-child(3) {
        transform: translateY(-6px) rotate(-45deg);
      }
    }
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
