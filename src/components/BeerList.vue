<template>
  <section class="beer-list page__beer-list">
    <my-button @click="fetchBeer()" class="beer-list__button-light"
      >Get a random beer</my-button
    >
    <transition name="fade" mode="out-in">
      <div v-if="beers.length > 0" class="beer-list__container">
        <beer-item
          v-for="beer in beers"
          :key="beer.id"
          :beer="beer"
          @remove="removeBeer"
        />
      </div>
      <h2 v-else class="beer-list__title">
        The beer list is <span class="beer-list__subtitle">empty</span>
      </h2>
    </transition>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import BeerItem from './BeerItem.vue';
import MyButton from './UI/MyButton.vue';

export default {
  components: { BeerItem, MyButton },
  name: 'beer-list',
  methods: {
    ...mapActions({
      fetchBeer: 'beer/fetchBeer',
      removeBeer: 'beer/removeBeer',
    }),
  },
  computed: {
    ...mapState({
      beers: (state) => state.beer.beers,
    }),
  },
};
</script>

<style scoped>
.beer-list {
  max-width: 1110px;
  font-family: "DM Sans", Arial, Helvetica, sans-serif;
  box-sizing: border-box;
  padding: 128px 0 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.beer-list__container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px 18px;
  align-self: normal;
  margin-top: 50px;
  justify-items: center;
}

.page__beer-list {
  margin: 0 auto;
}

.beer-list__title {
  margin: 50px 0 0;
  font-weight: 700;
  font-size: 3.75em;
  line-height: 1.18;
  text-align: center;
  letter-spacing: -0.5px;
  color: #fafafa;
}

.beer-list__subtitle {
  color: #5c62ec;
}

.beer-list__button-light {
  background: #5c62ec;
  transition: background 0.5s;
}

.beer-list__button-light:hover {
  background: #3c40ae;
}

@media screen and (max-width: 650px) {
  .beer-list {
    padding: 64px 0;
  }
  .beer-list__title {
    font-weight: 500;
    font-size: 2.125em;
    line-height: 1.18;
    text-align: center;
    letter-spacing: 0.25px;
  }
}

@media screen and (max-width: 1156px) {
  .beer-list__container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: 764px) {
  .beer-list__container {
    grid-template-columns: repeat(1, 1fr);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
