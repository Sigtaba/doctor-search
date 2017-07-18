var Doctor = require('./../js/search.js').doctorModule;
var apiKey = require('./../.env').apiKey;

console.log('hello');

var displayData = function(result) {
  for(i = 0; i < result.data.length ; i++)
  $('#results').append('<div class="doc">' + '<div class="doc-title">' + '<img class="doc-pic" src="' + result.data[i].profile.image_url + '">' + '<h3>' + result.data[i].profile.first_name + " " +  result.data[i].profile.last_name + " " + result.data[i].profile.title + '</h3>' + '</div>' + '<div class="bio">' + result.data[i].profile.bio + '</div>' + '</div>');
}


$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    $('#results').empty();
    var city = $('#city').val();
    var state = $('#state').val();

    var medicalIssue = $('#issue').val();
    var newSearch = new Doctor();
    console.log(displayData);
    newSearch.getDoctors(medicalIssue, apiKey, displayData);
  });
});
