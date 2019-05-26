function initMap() {
        var myLatLng = {lat: 44.9727, lng: -93.23540000000003};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
        });
        var contentString = 'The campground is here!';
        var infowindow = new google.maps.InfoWindow;
        infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        marker.addListener('click', function() {
          infowindow.open(resultsMap, marker);
        });
}
