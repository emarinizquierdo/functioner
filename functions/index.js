const functions = require('firebase-functions');
const app = require('express')();
const request = require('request');
const _ = require('lodash');

let location
app.get('/api/places', (req, res) => {

  if (req.query.latlong) {
    location = req.query.latlong.split(',');

    let url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyA_ycU-OVy7aVlROkAY-sMDNOno43me_UY';

    if (req.query.latlong) {
      url = url + '&location=' + req.query.latlong;
    }

    url = url + '&rankby=distance';


    if (req.query.types) {
      url = url + '&types=' + req.query.types;
    }

    if (req.query.pagetoken) {
      url = url + '&pagetoken=' + req.query.pagetoken;
    }

    // response.writeHead(200, {"Content-Type": "application/json"});
    request(url, function (error, response, body) {

      if (error) {

      }

      let data = JSON.parse(body);
      let countDown = data.results.length;


      for (let i = 0; i < data.results.length; i++) {
        data.results[i].distance = distance(data.results[i].geometry.location.lat, data.results[i].geometry.location.lng, location[0], location[1]);
/*
        request("https://maps.googleapis.com/maps/api/place/details/json?placeid=" + data.results[i].place_id + "&key=AIzaSyA_ycU-OVy7aVlROkAY-sMDNOno43me_UY", function(err2, res2, body2) {
          countDown--;
          if (err2) {
            console.log(err2);
          }
          let data2 = JSON.parse(body2);
          if (data2 && data2.result) {
            data.results[i].details = data2.result;
          }
          if (countDown == 0) {
            res.json(data);
          }
        });
        */
      }

      res.json(data);
    });
  } else {
    res.status(400).send('Bad request');
  }





});

function toRad(num) {
  return num * Math.PI / 180;
}

function distance(lon1, lat1, lon2, lat2) {
  var R = 6371; // Radius of the earth in km
  var dLat = toRad(lat2 - lat1); // Javascript functions in radians
  var dLon = toRad(lon2 - lon1);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}



exports.app = functions.https.onRequest(app);
