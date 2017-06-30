function Doctor() {

}

Doctor.prototype.getDoctors = function(medicalIssue, apiKey) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + medicalIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     for(i = 0; i < result.data.length ; i++)
     $('#results').append('<div class="doc">' + '<img class="doc-pic" src="' + result.data[i].profile.image_url + '">' + '</br>' +  '<h3>' + result.data[i].profile.first_name + " " +  result.data[i].profile.last_name + " " + result.data[i].profile.title + '</h3>' + '<div class="bio">' + "bio: " + result.data[i].profile.bio + '</div>' + '</div>');
     console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
};

exports.doctorModule = Doctor;
