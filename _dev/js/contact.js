import prestashop from 'prestashop';

if (document.getElementById('googleMap') !== null) {
  $.getScript(`https://maps.googleapis.com/maps/api/js?key=${prestashop.configuration.google}`).then(() => {
    const myLatLng = { lat: 44.2584316, lng: 12.0670747 };
    const mapOptions = {
      zoom: 10, center: myLatLng,
    };

    const map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

    const marker = new google.maps.Marker({
      position: myLatLng, map, url: 'https://goo.gl/maps/zAgSf8Wya15QqKhW6', // icon: '/img/marker.png'
    });

    const contentString = '<div class="map-container">'
      + '      <div class="placeDiv">'
      + '        <div class="placecard__container">'
      + '          <div class="placecard__left">'
      + '            <p class="placecard__business-name">Cantina Forlì Predappio Soc. Agr. Coop.</p>'
      + '            <p class="placecard__info">Via Due Ponti, 13, 47122 Malmissole FC</p>'
      + '            <a class="placecard__view-large" target="_blank"'
      + '               href="https://goo.gl/maps/zAgSf8Wya15QqKhW6"'
      // eslint-disable-next-line no-undef
      + `               id="A_41">${largerMap}</a>`
      + '          </div>'
      + '          <div class="placecard__right">'
      + '            <a class="placecard__direction-link" target="_blank"'
      // eslint-disable-next-line max-len
      + '               href="https://www.google.com/maps/dir//Cantina+Forl%C3%AC+Predappio+Soc.+Agr.+Coop.,+Via+Due+Ponti,+Malmissole,+Province+of+Forl%C3%AC-Cesena,+Italy/@44.2584242,12.0258753,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x132b5628a87727e3:0xf35bf9aff93bead0!2m2!1d12.0670747!2d44.2584316?hl=en-US&entry=ttu"'
      + '               id="A_9">'
      // eslint-disable-next-line no-undef
      + `              <div class="placecard__direction-icon"></div>${directions}</a>`
      + '          </div>'
      + '        </div>'
      + '      </div>'
      + '    </div>';

    const infoWindow = new google.maps.InfoWindow({ content: contentString });
    infoWindow.open({ anchor: marker, map });

    google.maps.event.addListener(marker, 'click', () => {
      window.open(marker.url, '_blank');
    });
  });
}
