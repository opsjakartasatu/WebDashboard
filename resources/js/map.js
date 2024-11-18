// var map = L.map("map").setView([-6.1777559, 106.8253848], 12);
var map = L.map("map", {
    center: [-6.1777559, 106.8253848],
    zoom: 12,
    zoomControl: false, // Menonaktifkan kontrol zoom default
});

L.control
    .zoom({
        position: "bottomright", // Mengatur posisi ke kanan bawah
    })
    .addTo(map);

// Using OpenStreetMap as a free alternative to Esri's basemap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Using OpenStreetMap as a free alternative to Esri's basemap
L.esri
    .featureLayer({
        url: "https://tataruang.jakarta.go.id/server/rest/services/Hosted/Data_Feature_Layer/FeatureServer/2",
    })
    .addTo(map);
