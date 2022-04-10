<template>
  <main class="content">
    <router-view v-slot="{ Component }">
      <transition name="component-fade" mode="out-in">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
  </main>
</template>

<script>
export default {
  name: 'my-main',
  data() {
    return {
      view: 'Component',
    };
  },
};
</script>

<style scoped>
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.3s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>
