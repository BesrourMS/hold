var google;

	function initialize() {
		var myLatlng = new google.maps.LatLng(33.874786,10.855467);
		var mapOptions = {
			zoom: 7,
			// The latitude and longitude to center the map (always required)
			center: myLatlng,
			// How you would like to style the map. 
			scrollwheel: false,
			styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
		  }
		  var map = new google.maps.Map(document.getElementById('fh5co-map'), mapOptions),
		  contentString = '<address>Safouan Besrour<br>405 Whitworth<br>Seattle WA 98052</address>',
		  infowindow = new google.maps.InfoWindow({
			content: contentString
		  });

		  var marker = new google.maps.Marker({
			  position: myLatlng,
			  map: map,
			  icon: 'images/loc.png',
			  title: 'SmartArchi'
		  });
		  google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});

	}
	google.maps.event.addDomListener(window, 'load', initialize);