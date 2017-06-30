var Doctor = require('./../js/search.js').doctorModule;
var apiKey = require('./../.env').apiKey;

console.log('hello');

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    var medicalIssue = $('#issue').val();
    var newSearch = new Doctor();
    newSearch.getDoctors(medicalIssue, apiKey);
  });
});
