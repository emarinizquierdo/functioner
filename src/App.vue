<template>
<div id="app">
  <nav>
    <div class="nav-wrapper blue-grey ">
      <a href="#" class="brand-logo"></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <router-link to="view1">view1</router-link>
        </li>
        <li>
          <router-link to="view2">view2</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view/>
</div>
</template>

<script>

let app = {
  name: 'app'
}

export default app;
</script>

<style>
#app {}
</style>
