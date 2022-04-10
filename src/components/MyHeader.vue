<template>
  <header class="header page__header">
    <h1 class="header__title">
      <router-link class="header__link" to="/">RateBeer</router-link>
    </h1>
    <nav class="header__menu">
      <ul class="header__menu-list">
        <li class="header__menu-link">
          <router-link class="header__link" to="/"> Main </router-link>
        </li>

        <li class="header__menu-link">
          <router-link class="header__link" to="/profile">
            Profile
          </router-link>
        </li>
        <li class="header__menu-link">
          <router-link class="header__link" to="/beer"> Beer </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'my-header',
};
</script>

<style scoped>
.header {
  max-width: 1156px;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 18px 0;
  border-bottom: 1px solid #26292d;
}

.page__header {
  margin: 0 auto;
}

.header__title {
  margin: 0;
  font-weight: 600;
  font-size: 1.5em;
  line-height: 1.33;
}

.header__link {
  color: #ffffff;
  text-decoration: none;
}

.header__menu-list {
  font-family: "DM Sans", Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
}

.header__menu-link {
  font-style: normal;
  font-weight: 500;
  font-size: 1em;
  line-height: 1;
  color: #ffffff;
  cursor: pointer;
  display: flex;
}

.header__menu-link:not(:last-child) {
  margin-right: 23px;
}

@media screen and (max-width: 1184px) {
  .page__header {
    margin-right: 16px;
    margin-left: 16px;
  }
}

@media screen and (max-width: 360px) {
  .header {
    flex-direction: column;
  }

  .header__menu {
    margin-top: 25px;
  }
}
</style>
