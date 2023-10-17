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
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
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