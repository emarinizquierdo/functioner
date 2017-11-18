<template>
  <div  class="progress blue lighten-2">
    <div class="indeterminate blue"></div>
    {{msg}}
  </div>
</template>

<script>

function ProgressBar() {

  this.name = 'progress-bar';

  this.data = _data;
  this.created = _created;

  this.methods = {
    showProgressBar : _showProgressBar
  }

  function _data () {

    return {
      show : false,
      msg : ''
    }

  }

  var publicMethods = {
    showProgressBar : this.methods.showProgressBar
  }

  function _created () {
    this.$store.state.progress = publicMethods;
  }

  function _showProgressBar(){
    debugger;
    this.show = true;
    this.msg = "heyyy";
  }

};

export default new ProgressBar();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .progress {
    padding: 0;
    margin: 0;
  }
</style>
