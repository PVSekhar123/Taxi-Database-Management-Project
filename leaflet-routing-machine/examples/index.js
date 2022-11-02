var map = L.map('map');

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);




var control = L.Routing.control(L.extend(window.lrmConfig, {
	waypoints: [
		L.latLng(22.74, 75.94),
		L.latLng(22.6792, 75.749)
	],
	geocoder: L.Control.Geocoder.nominatim(),
	routeWhileDragging: true,
	reverseWaypoints: true,
	showAlternatives: true,
	altLineOptions: {
		styles: [
			{color: 'black', opacity: 0.15, weight: 9},
			{color: 'white', opacity: 0.8, weight: 6},
			{color: 'blue', opacity: 0.5, weight: 2}
		]
	}
}))

setTimeout(function() { 
	control.addTo(map)
	L.Routing.errorControl(control).addTo(map);
}, 3000);

setTimeout(function() { 
	map.removeControl(control);
}, 5000);

setTimeout(function() { 
	control.addTo(map)
}, 6000);
