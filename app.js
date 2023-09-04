function obtenerUbicacion() {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var ubicacion = "Latitud: " + position.coords.latitude + "<br>Longitud: " + position.coords.longitude;
            document.getElementById("ubicacion").innerHTML = ubicacion;

            // Envía la ubicación al servidor aquí (puedes usar AJAX o Fetch API).
        });
    } else {
        alert("La geolocalización no está disponible en este navegador.");
    }
}