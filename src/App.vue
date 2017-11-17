<template>
<div id="app">
  <nav>
    <div class="nav-wrapper blue-grey ">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <router-link to="view1">view1</router-link>
        </li>
        <li>
          <router-link to="view2">view2</router-link>
        </li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
  <router-view/>
</div>
</template>

<script>
export default {
  name: 'app'
};
</script>

<style>
#app {}
</style>
