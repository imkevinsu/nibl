const querystring = require('querystring')
const foursquare = require('../../../api-config/foursquare-config.js')
const bodyParser = require('body-parser')
const utils = require('./../utils/util')

var credentials = {
  'v': '20170904'
};
credentials.client_id = foursquare.CLIENT_ID;
credentials.client_secret = foursquare.CLIENT_SECRET;
const qs = querystring.stringify(credentials);


module.exports.getRestaurants = function(req, res) {
  const url = 'https://api.foursquare.com/v2/venues/explore';
  var myQuery = req.query;
  var parameterObj = {
    'venuePhotos': '1',
    'limit': '10'
  };
  parameterObj.query = myQuery.query;
  parameterObj.near = myQuery.near;
  parameterObj.radius = myQuery.radius;
  const parameter = querystring.stringify(parameterObj);
  const urlQuery = url+ '?' + parameter + '&' + qs;

  utils.apiCall(urlQuery, function(data) {
    utils.getRestaurantData(data)
      .then(function(restaurantData){
        console.log('This this finally worked');
        res.send(restaurantData);
       });
  });
};

module.exports.getMenu = function(req, res) {
  const url = 'https://api.foursquare.com/v2/venues/40a55d80f964a52020f31ee3/menu';
  const urlQuery = url+ '?' + qs;
  utils.apiCall(urlQuery, function(data) {
    res.send(data);
  });
};