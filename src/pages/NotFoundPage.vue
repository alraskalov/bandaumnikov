<template>
  <section class="not-found page__not-found">
    <h2 class="not-found__title">404</h2>
    <p class="not-found__subtitle">Not Found</p>
    <router-link to="/" class="not-found__link"
      >Go <span class="not-found__text"> Home </span></router-link
    >
  </section>
</template>

<script>
export default {
  name: 'notFound-page',
};
</script>

<style scoped>
.not-found {
  width: calc(614 / 1440 * 100%);
  font-family: "DM Sans", Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 128px 0 128px;
  flex-direction: column;
}

.page__not-found {
  margin: 0 auto;
}

.not-found__title {
  margin: 0;
  font-weight: 700;
  font-size: 3.75em;
  line-height: 1.18;
  text-align: center;
  letter-spacing: -0.5px;
  color: #fafafa;
}

.not-found__subtitle {
  margin: 0;
  font-weight: 700;
  font-size: 3.75em;
  line-height: 1.18;
  text-align: center;
  letter-spacing: -0.5px;
  color: #5c62ec;
}

.not-found__link {
  color: #fff;
  text-decoration: none;
  margin-top: 50px;
}

.not-found__text {
  transition: color .5s;
}

.not-found__text:hover {
  color: #5c62ec;
}
</style>
