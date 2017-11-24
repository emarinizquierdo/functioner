<template>
<div v-if="show" class="progress blue lighten-2">
  <div class="indeterminate blue"></div>
</div>
</template>

<script>
function ProgressBar() {

  this.name = 'progress-bar';

  this.data = _data;
  this.created = _created;

  function _data() {

    return {
      show: false
    }

  }

  function showProgressBar() {
    this.show = true;
    this.msg = "heyyy";
  }

  function hideProgressBar() {
    this.show = false;
    this.msg = "heyyy";
  }

  function _created() {

    this.$store.state.progress = {
      showProgressBar: showProgressBar.bind(this),
      hideProgressBar: hideProgressBar.bind(this)
    }

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
