<template>
  <header>
    <nav id="nav" class="a">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">about</router-link>
    </nav>
  </header>
  <main><router-view /></main>
  <footer>footer</footer>
</template>

<style lang="stylus">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #222;
}

#nav {
  padding: 30px;
  display: flex;
  justify-content: center;

  a {
    display: block;
    font-weight: bold;
    color: white;
    background: #888;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
