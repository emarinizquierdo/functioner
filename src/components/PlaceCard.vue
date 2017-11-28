<template>
<div class="card">
  <div class="card-image card-image waves-effect waves-block waves-light">
    <img class="responsive-img" v-bind:src="getImage">
    <span class="card-title">{{place.name}}</span>
  </div>
  <div class="card-content">
      <rating-star num-stars="5" v-bind:rating="place.rating"></rating-star>
      <p><a href="#">This is a link</a></p>
    </div>

  <div class="card-reveal">
    <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
    <p>Here is some more information about this product that is only revealed once clicked on.</p>
  </div>
</div>
</template>

<script>

import RatingStar from '@/components/RatingStar';

function PlaceCard() {

  this.name = 'place-card';

  this.data = _data;
  this.props = ['place'];
  this.created = _created;
  this.computed = {
    getImage: _getImage
  }

  this.components = {
    ratingStar : RatingStar
  }

  function _data() {

    return {}

  }

  function _created() {



  }

  function _getImage() {
    if (this.place != null && this.place.photos != null && this.place.photos[0] != null) {
      let _image = "";
      _image += "https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyD4Ob2COwMaoGO-3JhGPWYUcNz2ttqJrcY&photo_reference=";
      _image += this.place.photos[0].photo_reference;
      _image += "&maxheight=400&maxwidth=400";
      return _image;
    }
  }

};

export default new PlaceCard();
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card-image{
    max-height: 300px;
  }
</style>
