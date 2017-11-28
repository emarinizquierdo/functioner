<template>
<div class="view1">
        <div class="col s12 m2 l2">
          <place-card v-for="item in places" v-bind:place="item"></place-card>
        </div>

</div>
</template>

<script>

import PlaceCard from '@/components/PlaceCard';
const request = require('superagent');

function View2() {

  /* Public Variables */
  this.name = 'View1';

  /* Revealing Methods */
  this.methods = {
    makeRequest: _makeRequest
  }

  this.data = _data;
  this.created = _created;

  this.components = {
    placeCard : PlaceCard
  }

  /* Reactive props */
  function _data() {
    return {
      places: []
    }
  }

  /* Private Methods */

  function _created() {
    this.makeRequest();
  };

  function _makeRequest() {

    this.$store.state.progress.showProgressBar();

    request
      .get('/api/places?latlong=40.4940472,-3.6725582&radius=%202000&types=food')
      .end(function(err, res) {
        // Do something

        if (err) {

        }

        this.places = res.body.results;
        this.$store.state.progress.hideProgressBar();

      }.bind(this));


  }

}


export default new View2();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
