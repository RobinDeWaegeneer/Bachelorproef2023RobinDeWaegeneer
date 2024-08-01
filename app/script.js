mapboxgl.accessToken = 'pk.eyJ1IjoibWNzcGVlZGJyb3MiLCJhIjoiY2x2YTRpbXoxMHpsYzJqbnR4NzMxcTk5ZCJ9.y4_r2Qm3m-xK6fUcaclHqg';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, { enableHighAccuracy: true });

function successLocation(position) {
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude]);
    }

function errorLocation() {
    setupMap([-2.24, 53.48]);
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
      });

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);

    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
      });

    map.addControl(directions, 'top-left');
}


