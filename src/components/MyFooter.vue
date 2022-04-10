<template>
  <footer class="footer page__footer">
    <div class="footer__description">
      <h2 class="footer__title">RateBeer</h2>
      <nav class="footer__menu">
        <p class="footer__text">Navigation</p>
        <ul class="footer__menu-list">
          <li class="footer__menu-link">
            <router-link class="footer__link" to="/"> Main </router-link>
          </li>
          <li class="footer__menu-link">
            <router-link class="footer__link" to="/profile">
              Profile
            </router-link>
          </li>
          <li class="footer__menu-link">
            <router-link class="footer__link" to="/beer"> Beer </router-link>
          </li>
        </ul>
      </nav>
      <div class="footer__social">
        <p class="footer__text">Social</p>
        <a
          href="https://www.linkedin.com/"
          class="footer__social-link"
          target="_blank"
        >
          <img
            src="@/assets/images/linkedin.svg"
            alt="LinkedIn Icon"
            class="footer__social-img"
          />
        </a>
      </div>
    </div>
    <p class="footer__copyright">
      &copy; {{ new Date().getFullYear() }} RateBeer
    </p>
  </footer>
</template>

<script>
export default {
  name: 'my-footer',
};
</script>

<style scoped>
.footer {
  max-width: 1156px;
  font-family: "DM Sans", Arial, Helvetica, sans-serif;
  display: flex;
  box-sizing: border-box;
  padding: 64px 0 32px;
  flex-direction: column;
  border-top: 1px solid #26292d;
}

.page__footer {
  margin: 0 auto;
}

.footer__description {
  display: flex;
  border-bottom: 1px solid #26292d;
  padding-bottom: 64px;
  margin-bottom: 16px;
}

.footer__title {
  margin: 0;
  font-family: "Poppins", Arial, Helvetica, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.5em;
  color: #fff;
  margin-right: 129px;
}

.footer__menu {
  margin-right: 129px;
}

.footer__menu-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.footer__menu-link {
  font-weight: 400;
  font-size: 0.875em;
  line-height: 1.43;
  letter-spacing: 0.25px;
}

.footer__link {
  color: #fff;
  text-decoration: none;
}

.footer__menu-link:not(:last-child) {
  margin-bottom: 24px;
}

.footer__text {
  margin: 0;
  font-weight: 500;
  font-size: 1em;
  line-height: 1.25;
  letter-spacing: 0.15px;
  color: #85bfd1;
  margin-bottom: 24px;
}

.footer__social-link:not(:last-child) {
  margin-right: 16px;
}

.footer__copyright {
  margin: 0;
  font-weight: 400;
  font-size: 0.75em;
  line-height: 1.33;
  letter-spacing: 0.4px;
  color: #fff;
}

@media screen and (max-width: 600px) {
  .footer {
    align-items: center;
  }

  .footer__title {
    margin-right: 0;
    margin-bottom: 32px;
  }

  .footer__description {
    flex-direction: column;
    padding-bottom: 48px;
    width: 100%;
    align-items: center;
  }

  .footer__menu {
    margin-right: 0;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-bottom: 32px;
  }

  .footer__menu-list {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .footer__social {
    flex-direction: column;
    display: flex;
    align-items: center;
  }
}
@media screen and (max-width: 1184px) {
  .page__footer {
    margin-right: 16px;
    margin-left: 16px;
  }
}
</style>
