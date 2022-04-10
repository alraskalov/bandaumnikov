<template>
  <div class="beer-item">
    <h3 class="beer-item__name">{{ beer.name }}</h3>
    <p class="beer-item__text"><strong>Brand:</strong>{{ beer.brand }}</p>
    <p class="beer-item__text"><strong>Style:</strong>{{ beer.style }}</p>
    <p class="beer-item__text"><strong>Hop:</strong>{{ beer.hop }}</p>
    <p class="beer-item__text"><strong>Yeast:</strong>{{ beer.yeast }}</p>
    <p class="beer-item__text"><strong>Malts:</strong>{{ beer.malts }}</p>
    <p class="beer-item__text"><strong>IBU:</strong>{{ beer.ibu }}</p>
    <p class="beer-item__text"><strong>Alcohol:</strong>{{ beer.alcohol }}</p>
    <p class="beer-item__text"><strong>Blg:</strong>{{ beer.blg }}</p>
    <my-button class="btn-delete" @click="$emit('remove', beer)">Удалить</my-button>
  </div>
</template>

<script>
import MyButton from './UI/MyButton.vue';

export default {
  components: { MyButton },
  name: 'beer-item',
  props: {
    beer: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.beer-item {
  font-family: "DM Sans", Arial, Helvetica, sans-serif;
  box-sizing: inherit;
  background: #1c1e22;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 24px;
  color: #fff;
  justify-content: space-between;
  width: 300px;
}

.beer-item__name {
  margin: 0 0 10px;
  font-weight: 500;
  font-size: 2.125em;
  line-height: 1.18;
  letter-spacing: 0.25px;
  align-self: center;
  text-align: center;
}

.beer-item__text {
  margin: 0;
  font-weight: 400;
  font-size: .85em;
  line-height: 1.75;
  letter-spacing: 0.44px;
  display: flex;
  justify-content: space-between;
}

.beer-item:first-child {
  background: #4a9260;
}

.btn-delete {
  align-self: center;
  border: 1px solid #ffffff;
  background-color: transparent;
  transition: opacity 0.5s;
  margin-top: 30px;
}

@media screen and (max-width: 410px) {
  .beer-item {
    width: 200px;
  }
}
</style>
