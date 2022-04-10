<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button',
};
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 169px;
  height: 48px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  font-size: 1em;
  line-height: 1;
  color: #fff;
  border-radius: 5px;
}
</style>
