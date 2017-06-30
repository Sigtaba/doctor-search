var Doctor = require('./../js/search.js').doctorModule;
var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    $('#results').empty();
    var city = $('#city').val();
    var state = $('#state').val();

    var medicalIssue = $('#issue').val();
    var newSearch = new Doctor();
    newSearch.getDoctors(medicalIssue, apiKey);
  });
});
