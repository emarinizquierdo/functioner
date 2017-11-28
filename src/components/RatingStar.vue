<template>
  <span v-if="rating">
      <span class="cards-rating-score">{{rating}}</span>
      <ol class="cards-rating-stars">
          <li v-for="n in getNumStars" v-bind:class="getStyles(n)"></li>
      </ol>
  </span>
</template>

<script>
function PlaceCard() {

  this.name = 'rating-star';
  this.props = ['numStars', 'rating', 'reviews'];
  this.computed = {
    getPercentage: _getPercentage,
    getNumStars : _getNumStars,

  };

  this.methods = {
    getStyles: _getStyles
  }

  function _getPercentage(rating) {
      return "width: " + (rating * 100) / 5 + "%";
  }

  function _getNumStars(){
    let nStars = parseInt(this.numStars);
    return (typeof nStars == Number && nStars >= 3) ? nStars : 5
  }

  function _getStyles(n){
      return {
        "cards-rating-star" : true,
        "cards-rating-star-half" : ((n + 0.5) > parseFloat(this.rating)),
        "cards-rating-star-empty" : (n > parseFloat(this.rating))
      }

  }

};

export default new PlaceCard();
</script>

<style scoped>
.cards-rating-stars {
    vertical-align: middle;
    display: inline-block;
    height: 16px;
    margin-right: 1px;
    font-size: 0;
    padding: 0;
}
.cards-rating-star {
    background: url(//maps.gstatic.com/tactile/omnibox/star-20130618.png) no-repeat;
    background-position: 0 1px;
    background-size: 37px 13px;
    display: inline-block;
    height: 13px;
    width: 13px;
}
.cards-rating-star-half {
    background-position: -13px 1px;
}
.cards-rating-star-empty {
    background-position: -25px 1px;
}
.cards-rating-score {
    vertical-align: middle;
    color: #e7711b;
    margin-right: 1px;
}
.section-result-num-ratings {
    color: #bbb;
    vertical-align: middle;
}
</style>
