
//Información hoteles

var hoteles = {

    Vincci: {
        nombre: "Hotel: " + "Vincci",
        ubicacion: "Ubicación: " + "Málaga",
        imagen: "https://www.vinccimalaga.com/uploads/galeriahoteles/vincci-malaga-hotel.jpg"
    },

    "La Perla": {
        nombre: "Hotel: " + "La Perla",
        ubicacion: "Ubicación: " + "Almería",
        imagen: "https://www.kayak.es/rimg/himg/4a/2b/f6/arbisoftimages-17865-23233076-image.jpg?width=1366&height=768&xhint=691&yhint=426&crop=true"
    },

};

var respuesta = prompt("¿Quiere valorar al hotel Vincci o al hotel La Perla")

document.getElementById("hotel-name").innerHTML = hoteles[respuesta].nombre;
document.getElementById("hotel-location").innerHTML = hoteles[respuesta].ubicacion;
document.getElementById("hotel-image").src = hoteles[respuesta].imagen;

//Estrellas

var stars = {
    uno: "<span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    dos: "<span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span><span>&#9734;</span>",
    tres: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span><span>&#9734;</span>",
    cuatro: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9734;</span>",
    cinco: "<span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>",
};

var rating = prompt("Valore del uno al cinco al hotel")

document.getElementById("hotel-rating").innerText = stars[rating];


//Reseña anónima

var anonymous = confirm("¿Quiere que su valoración sea anónima?")

document.getElementById("checkbox").checked = anonymous;
