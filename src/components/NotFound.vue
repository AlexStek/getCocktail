<template>
  <div class="wrapper">
    <h1>404</h1>
    <p>Oops! Something is wrong.</p>
    <router-link :to="{ name: 'home' }">
      Go back
    </router-link>
  </div>
</template>

<style scoped lang="scss">
.wrapper {
  position: fixed;
  z-index: 100;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
}

p {
  font-size: 2em;
  text-align: center;
  font-weight: 100;
}

h1 {
  text-align: center;
  font-size: 10em;
  font-weight: 100;

  @media screen and (min-width: 768px) {
    font-size: 15em;
  }
}
</style>