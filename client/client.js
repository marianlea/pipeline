let map;

async function initMap() {
    const { Map, Marker } = await google.maps.importLibrary("maps")

    map = new Map(document.getElementById("map"), {
        center: { lat: -37.827084195990295, lng: 144.95917320577624 },
        zoom: 13,
        minZoom: 9,
    });
    return stationMarker();
}

function stationMarker() {
    const url = 'http://localhost:8080/api/stations/all'

    fetch(url)
        .then(res => res.json())
        .then(stations => {
            for (let i = 0; i < stations.length; i++) {
                let latitude = stations[i].latitude;
                let longitude = stations[i].longitude;

                const marker = new google.maps.Marker({
                    position: { lat: latitude, lng: longitude },
                    map,
                    draggable: true,
                    animation: google.maps.Animation.DROP,
                    title: "Hello World!",
                })

                // DEAL WITH TOGGLEBOUNCE LATER

                // marker.addListener("click", function () {
                //     toggleBounce(marker)
                // });

            }
        })
}

// DEAL WITH TOGGLEBOUNCE LATER

// function toggleBounce() {
//     if (marker.getAnimation() !== null) {
//         marker.setAnimation(null);
//     } else {
//         marker.setAnimation(google.maps.Animation.BOUNCE);
//     }
// }

initMap();
