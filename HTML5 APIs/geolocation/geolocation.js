
var findLocation = function(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showLocation);
    }
    else { alert("Geolocation API will not work with this browser.");}
}

var showLocation = function(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var latlon = latitude + "," + longitude;
    var img_url = "http://maps.googleapis.com/maps/api/staticmap?center="
    + latlon + "&zoom=14&size=400x300&sensor=false";

    document.getElementById("mapholder").innerHTML = "<img src='" + img_url + "'>";
    document.getElementById("lat_lon").innerHTML = "Latitude: " + latitude +
        "<br/>Longitude: " + longitude;

   
}