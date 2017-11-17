<template>
<div class="view1">
  <ul id="example-1">
  <li v-for="item in places">
    {{ item.name }}
  </li>
</ul>
</div>
</template>

<script>

const request = require('superagent');

let view1 = {

  name: 'View1',
  created: () => {
    _makeRequest.call(this);
  },
  data () {

    return {
      msg: 'message',
      places: []
    }

  }

};

function _makeRequest () {

  debugger;

  request
  .get('/api/places?latlong=40.4940472,-3.6725582&radius=%202000&types=food')
  .end((err, res) => {
    // Do something

    if (err) {

    }

    debugger;
    this.data.places = res.body.results;

  });
}



export default view1;
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
