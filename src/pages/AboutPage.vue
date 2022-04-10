<template>
  <section class="about page__about">
    <h2 class="about__title">
      This is <span class="about__subtitle">RateBeer.</span> Beer selection
      service
    </h2>
    <div class="about__buttons">
      <my-button
        @click="$router.push('/profile')"
        class="about__button about__button-light"
        >Profile</my-button
      >
      <my-button
        @click="$router.push('/beer')"
        class="about__button about__button-dark"
        >Choose a beer</my-button
      >
    </div>
  </section>
</template>

<script>
export default {
  name: 'about-page',
};
</script>

<style scoped>
.about {
  max-width: 524px;
  font-family: "DM Sans", Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 128px 0 128px;
  flex-direction: column;
}

.page__about {
  margin: 0 auto;
}

.about__title {
  margin: 0;
  font-weight: 700;
  font-size: 3.75em;
  line-height: 1.18;
  text-align: center;
  letter-spacing: -0.5px;
  color: #fafafa;
  margin-bottom: 32px;
  max-width: 480px;
}

.about__subtitle {
  color: #5c62ec;
}

.about__buttons {
  display: flex;
}

.about__button:not(:last-child) {
  margin-right: 24px;
}

.about__button-light {
  background: #5c62ec;
  transition: background 0.5s;
}

.about__button-light:hover {
  background: #3c40ae;
}

.about__button-dark {
  border: 1px solid #ffffff;
  background-color: transparent;
  transition: opacity 0.5s;
}

.about__button-dark:hover {
  opacity: 0.5;
}

@media screen and (max-width: 540px) {
  .about {
    padding: 64px 0;
  }
  .page__about {
    margin: 0 16px;
  }
  .about__title {
    font-weight: 500;
    font-size: 2.125em;
    line-height: 1.18;
    text-align: center;
    letter-spacing: 0.25px;
    max-width: 340px;
  }
  .about__buttons {
    display: flex;
    flex-direction: column;
  }

  .about__button:not(:last-child) {
    margin-right: 0;
  }
  .about__button-light {
    margin-bottom: 16px;
  }
}
</style>
