function initMap() {
    // Coordenadas da sua localização
    var myLatLng = {lat: -22.9068, lng: -43.1729};
  
    // Cria um novo mapa
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 15 // Nível de zoom
    });
  
    // Cria um marcador para sua localização
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Minha Localização'
    });
  }
  