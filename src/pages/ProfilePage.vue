<template>
  <section class="profile page__profile">
    <h2 v-if="loading" class="profile__title">Loading...</h2>
    <h2 v-else-if="error" class="profile__title">Error loading</h2>
    <div v-else class="profile__container">
      <img class="profile__photo" :src="user?.avatar" alt="User Avatar" />
      <h2 class="profile__name">
        {{ `${user.first_name} ${user.last_name}` }}
      </h2>
      <p class="profile__text age">
        <strong>Age:</strong> {{ birthDateToAge() }}
      </p>
      <p class="profile__text job">
        <strong>Job:</strong> {{ user.employment?.title }}
      </p>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  methods: {
    ...mapActions({
      fetchUser: 'user/fetchUser',
    }),
    birthDateToAge() {
      const birthDate = new Date(this.user?.date_of_birth);

      const now = new Date();
      const age = now.getFullYear() - birthDate.getFullYear();

      return now.setFullYear(1972) < birthDate.setFullYear(1972)
        ? age - 1
        : age;
    },
  },
  created() {
    this.fetchUser();
  },
  computed: {
    ...mapState({
      user: (state) => state.user.user,
      loading: (state) => state.user.loading,
      error: (state) => state.user.error,
    }),
  },
};
</script>

<style scoped>
.profile {
  max-width: 1156px;
  font-family: "DM Sans", Arial, Helvetica, sans-serif;
  display: flex;
  padding: 128px 0 128px;
  flex-direction: column;
  align-items: center;
}

.profile__container {
  display: grid;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  grid-column-gap: 30px;
  grid-template-columns: 300px 1fr;
  grid-template-rows: repeat(3, auto);
}

.page__profile {
  margin: 0 auto;
}

.profile__title {
  font-weight: 700;
  font-size: 3.75em;
  line-height: 1.18;
  text-align: center;
  letter-spacing: -0.5px;
  color: #fafafa;
}

.profile__photo {
  width: 300px;
  height: 300px;
  color: #fff;
  grid-column: 1 / 2;
  grid-row: 1 / 4;
}

.profile__name {
  margin: 0;
  font-weight: 700;
  font-size: 3.75em;
  line-height: 1.18;
  letter-spacing: -0.5px;
  color: #fff;
}

.profile__text {
  margin: 0;
  font-weight: 400;
  font-size: 1em;
  line-height: 1.75;
  letter-spacing: 0.44px;
  color: #fff;
}

.job {
  grid-row: 3 / 4;
  grid-column: 2 / 3;
}

.age {
  grid-row: 2 / 3;
  grid-column: 2 / 3;
}

@media screen and (max-width: 650px) {
  .profile {
    padding: 64px 0;
  }
  .profile__container {
    grid-template-columns: 1fr;
    align-items: center;
    justify-items: center;
    text-align: center;
    grid-row-gap: 15px;
  }

  .profile__photo {
    grid-column: initial;
    grid-row: initial;
  }

  .profile__name {
    font-weight: 400;
    font-size: 1.5em;
    line-height: 1.33;
  }

  .profile__title {
    font-weight: 500;
    font-size: 2.125em;
    line-height: 1.18;
    text-align: center;
    letter-spacing: 0.25px;
  }

  .age {
    grid-column: initial;
    grid-row: initial;
  }

  .job {
    grid-column: initial;
    grid-row: initial;
  }
}
</style>
