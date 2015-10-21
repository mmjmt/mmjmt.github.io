var map;
var interval;
var marker;
var marker1;
var x;
var y;
var transY = 0;
var transX = 0;
var transYinit ;
var transXinit ;


if ($('#education').width() > 992) {
    transY = -0.002;
    transYinit = -8.004;
}
else if (($('#education').width() < 992) && ($('#education').width() > 768)) {
    transY = -0.002;
    transX = 0;
    transYinit = -8.004;
    transXinit = -6;
}
else if ($('#education').width() < 768) {
    transY = 0;
    transYinit = 0;
    transX = 0;
    transXinit = 0;
}
else {
    transY = 0;
    transYinit = 0;
}

function initialize() {
    map = new google.maps.Map(document.getElementById('map-canvas'), {
        center: new google.maps.LatLng(40.007471 + transXinit, -105.266118 + transYinit), // Boulder CO
        zoom: 5,
        scrollwheel: false,
        draggable: false

    });
    marker1 = new google.maps.Marker({
        position: { lat: 40.007471, lng: -105.266118 },
        map: map
    });   

}

function removeMarker() {
    marker1.setMap(null);
}


function newLocation(newLat, newLng, newZoom) {

    if ($('#education').width() > 992) {
        transY = -0.002;
        transX = 0;
    }
    else if (($('#education').width() < 992) && ($('#education').width() > 768)) {
        transY = -0.002;
        transX = -0.002;
    }
    else if ($('#education').width() < 768) {
        transY = 0;
        transX = 0;
    }
    else {
        transY = 0;
        transYinit = 0;
    }

    x = newLat+transX;
    y = newLng+transY;

    interval = setInterval(function () {
        map.setZoom(2);
        map.panBy(1, 0);
    }, 1000);
    
    map.setCenter({
        lat: x,
        lng: y
    });
    marker = new google.maps.Marker({
        position: { lat:newLat, lng:newLng },
        map: map
    });
    //map.panTo(position);
    map.setZoom(newZoom);
    clearInterval(interval);
}

/*
function newZoom(newZoom) {
    map.setZoom(newZoom);
}*/


google.maps.event.addDomListener(window, 'load', initialize);