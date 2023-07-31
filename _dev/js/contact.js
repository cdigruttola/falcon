import prestashop from 'prestashop';

if (document.getElementById('googleMap') !== null) {
  $.getScript(`https://maps.googleapis.com/maps/api/js?key=${prestashop.configuration.google}`).then(() => {
    const myLatLng = { lat: 41.158896, lng: 15.123094 };
    const mapOptions = {
      zoom: 15, center: myLatLng,
    };

    const map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

    const marker = new google.maps.Marker({
      position: myLatLng, map, url: 'https://g.page/PanificioPastificioDiGruttola', // icon: '/img/marker.png'
    });

    google.maps.event.addListener(marker, 'click', () => {
      window.open(marker.url, '_blank');
    });
  });
}
