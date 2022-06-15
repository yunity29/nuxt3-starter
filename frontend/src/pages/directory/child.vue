<template>
  <div class="wrap">
    <TheHeader title="so happy" />
    <div class="row-1" @click="pi1Add()">p1:{{ state.p1 }}</div>
    <div class="row-2">p2:{{ state.p2 }}</div>
    <div class="row-3" @click="pi3Add()">p3:{{ state.p3 }}</div>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
// import TheHeader from 'components/TheHeader.vue';
const TheHeader = resolveComponent('TheHeader');

const state = reactive({
  p1: '',
  p2: 0,
  p3: new Date(),
});

const pi1Add = () => {
  state.p1 = 'p1';
};

const pi3Add = () => {
  state.p3 = new Date();
};


</script>

<style lang="scss" scoped>
.wrap {


  .row-1 {
    color: red;
  }

  .row-2 {
    color: blue;
  }
}
</style>
