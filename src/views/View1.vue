<template>
<div class="view1">
  <ul id="example-1">
    <li v-for="item in places">

      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{{ item.name }}</span>
              <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
            </div>
            <div class="card-action">
              <a href="#">This is a link</a>
              <a href="#">This is a link</a>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
</template>

<script>
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

    request
      .get('/api/places?latlong=40.4940472,-3.6725582&radius=%202000&types=food')
      .end(function(err, res) {
        // Do something

        if (err) {

        }

        this.places = res.body.results;

      }.bind(this));

  }

}


export default new View2();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
