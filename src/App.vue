<template>
  <div class="page">
    <my-header />
    <my-main />
    <my-footer />
  </div>
</template>

<script>
import MyFooter from './components/MyFooter.vue';
import MyHeader from './components/MyHeader.vue';
import MyMain from './components/MyMain.vue';

export default {
  components: {
    MyMain,
    MyFooter,
    MyHeader,
  },
};
</script>

<style>
.app {
  background: #171718;
}

.page {
  max-width: 1440px;
  min-width: 300px;
  min-height: 100vh;
  margin: auto;
  text-rendering: optimizeLegibility;
}
</style>
