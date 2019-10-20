var http = require('http')
var console = require('console')

module.exports.function = function dog_search (breed) {
  var dogAPI;
  var tmpResults;

  try { 
    encodeURI(dogAPI = "https://dog.ceo/api/breed/".concat(breed).concat("/images/random"))
    tmpResults = http.getUrl(dogAPI, {format: 'json'});
  }
  catch(e) {
      breed = " "
  }

if (breed != " ")
{
  var template = ({
    dog_breed: breed,
    dog_image: {
      url: tmpResults.message
    }, 
  });
}


  return template
}