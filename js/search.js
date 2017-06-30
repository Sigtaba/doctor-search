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

Doctor.prototype.getDoctors = function(medicalIssue, apiKey) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     for(i = 0; i < result.data.length ; i++)
     $('#results').append('<div class="doc">' + '<div class="doc-title">' + '<img class="doc-pic" src="' + result.data[i].profile.image_url + '">' + '<h3>' + result.data[i].profile.first_name + " " +  result.data[i].profile.last_name + " " + result.data[i].profile.title + '</h3>' + '</div>' + '<div class="bio">' + '<h4>Specialty: ' + result.data[i].specialties[0].name + '</h4>' + '</br>' +  result.data[i].profile.bio + '</div>' + '</div>');
     console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
};

Doctor.prototype.getSpecialties = function(apiKey) {

}

exports.doctorModule = Doctor;
