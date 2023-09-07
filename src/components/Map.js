import React, { useEffect, useRef, useState } from 'react';
import 'ol/ol.css'; // Import OpenLayers CSS
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import VectorLayer from 'ol/layer/Vector';
import { Vector as VectorSource } from 'ol/source';
import { Icon, Style } from 'ol/style';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import pinpoint from '../Assests/img/pin-location-icon-sign-symbol-design-free-png.webp';

const MapComponent = () => {
  const mapRef = useRef(null);
  const [longitude, setLongitude] = useState(3.34921); // Surulere, Lagos longitude
  const [latitude, setLatitude] = useState(6.49829); // Surulere, Lagos latitude
  const [zoom, setZoom] = useState(13);

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        createPinpointLayer(longitude, latitude),
      ],
      view: new View({
        center: [longitude, latitude],
        zoom: zoom,
      }),
    });

    // Cleanup map instance on component unmount
    return () => {
      map.setTarget(null);
    };
  }, [longitude, latitude, zoom]);

  // Function to create the pinpoint layer
  const createPinpointLayer = (lon, lat) => {
    const pinpointStyle = new Style({
      image: new Icon({
        src: pinpoint,
        imgSize: [32, 32],
        anchor: [0.5, 1],
      }),
    });

    const pinpointFeature = new Feature({
      geometry: new Point([lon, lat]),
    });

    pinpointFeature.setStyle(pinpointStyle);

    const pinpointSource = new VectorSource({
      features: [pinpointFeature],
    });

    const pinpointLayer = new VectorLayer({
      source: pinpointSource,
    });

    return pinpointLayer;
  };

  return (
    <footer style={{ position: 'absolute', top: 600, bottom: 0, left: 0, right: 0, height: '600px' }}>
      <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
    </footer>
  );
};

export default MapComponent;
