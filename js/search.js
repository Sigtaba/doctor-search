function Doctor() {

}

// var apiKey2 = "AIzaSyD4tKeGzcMbXA6RVXoMleFX8KeAcvLI0SI";

// Doctor.prototype.getLocation = function(city, state) {
//   $.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city + state + '&key=' + apiKey2).then(function(object) {
//     var lat = object.results[0].geometry.location.lat;
//     var lon = object.results[0].geometry.location.lng;
//     console.log(lat, lon);
//   }); //close get
// };

Doctor.prototype.getDoctors = function(medicalIssue, apiKey, displayData) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     displayData(result);
     console.log(result);
    })
   .fail(function(error){
      console.log(apiKey);
    });
};


exports.doctorModule = Doctor;
