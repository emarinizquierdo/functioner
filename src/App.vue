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

  <progress-bar></progress-bar>
  <geo-location></geo-location>

  <router-view/>
</div>
</template>

<script>

import ProgressBar from '@/components/ProgressBar';
import GeoLocation from '@/components/GeoLocation';

var app = {
  name: 'app',
  components: {
    progressBar : ProgressBar,
    geoLocation : GeoLocation
  },
  methods:{
    showProgressBar : function(){
      this.$store.state.progress.hideProgressBar();
    }
  }
}

export default app;
</script>

<style>
#app {}
</style>
