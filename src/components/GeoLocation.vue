<template>
  <div>
  {{geo.latitude}}
</div>
</template>

<script>

function GeoLocation() {

  this.name = 'geo-location';

  this.data = _data;
  this.created = _created;
  this.computed = {
    geo : function(){
      return this.geolocation;
    }
  }

  this.components = {

  }

  function _data() {

    return {
      geolocation : {}
    }

  }

  function _created() {

    this.$store.state.geolocation = {};
    this.geolocation = this.$store.state.geolocation;

    _listenGeolocation.call(this);

  }

  function _listenGeolocation(){

    var id, target, options;

    function success(pos) {
        this.$store.state.geolocation = pos.coords
    }

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    }

    options = {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 0
    };

    id = navigator.geolocation.watchPosition(success.bind(this), error, options);

  }



};

export default new GeoLocation();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
