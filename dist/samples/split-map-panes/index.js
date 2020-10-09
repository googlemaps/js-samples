let mapLeft, mapRight;

// [START maps_split_map_panes]
function initMap() {
  const mapOptions = {
    center: { lat: 44.5250489, lng: -110.83819 },
    zoom: 18,
    scaleControl: false,
    streetViewControl: false,
  };
  // instantiate the map on the left with control positioning
  mapLeft = new google.maps.Map(document.getElementById("map-left"), {
    ...mapOptions,
    mapTypeId: "satellite",
    tilt: 0,
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
    },
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.LEFT_TOP,
    },
    zoomControlOptions: {
      position: google.maps.ControlPosition.LEFT_BOTTOM,
    },
  });
  // instantiate the map on the right with control positioning
  mapRight = new google.maps.Map(document.getElementById("map-right"), {
    ...mapOptions,
    fullscreenControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM,
    },
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.RIGHT_TOP,
    },
    zoomControlOptions: {
      position: google.maps.ControlPosition.RIGHT_BOTTOM,
    },
  });

  // helper function to keep maps in sync
  function sync(...maps) {
    let center, zoom;

    function update(changedMap) {
      maps.forEach((m) => {
        if (m === changedMap) {
          return;
        }
        m.setCenter(center);
        m.setZoom(zoom);
      });
    }
    maps.forEach((m) => {
      m.addListener("bounds_changed", () => {
        const changedCenter = m.getCenter();
        const changedZoom = m.getZoom();

        if (changedCenter !== center || changedZoom !== zoom) {
          center = changedCenter;
          zoom = changedZoom;
          update(m);
        }
      });
    });
  }
  sync(mapLeft, mapRight);

  function handleContainerResize() {
    const width = document.getElementById("container").offsetWidth;
    document.getElementById("map-left").style.width = `${width}px`;
    document.getElementById("map-right").style.width = `${width}px`;
  }
  // trigger to set map container size since using absolute
  handleContainerResize();
  // add event listener
  window.addEventListener("resize", handleContainerResize);
  //@ts-ignore
  Split(["#left", "#right"], {
    sizes: [50, 50],
  });
}
// [END maps_split_map_panes]
