let h2 = document.querySelector("h2");

//funcão que vai dizer oq fazer com as coordenadas que a navigator.geolocation pegar
function success(pos){
    //pegando apenas a latitude e longitude das informações que a função oferece
    console.log(pos.coords.latitude, pos.coords.longitude);
    
    /*mostrar a latitude e longitude na tag h2 quando o usuário permitir o site usar sua localização, 
    usando aspas invertidas para poder referenciar a função e também escrever o que eu quiser junto*/
    h2.textContent = `Latitude: ${pos.coords.latitude}, Longitude ${pos.coords.longitude}`;
}


function naoPermitir(error){
    console.log(error);
}

//pegar localização geográfica do usuário em tempo real
var watchID = navigator.geolocation.watchPosition(success, naoPermitir, {
    timeout: 5000
});

//navigator.geolocation.clearWatch(watchID);