import React from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import HeatmapLayer from 'react-leaflet-heatmap-layer';

const data = [
  { lat: 51.5, lng: -0.09, value: 3 },
  { lat: 51.51, lng: -0.1, value: 10 },
  { lat: 51.49, lng: -0.05, value: 5 },
];

const HeatmapExample = () => {
  return (
    <Map center={[51.505, -0.09]} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <HeatmapLayer
        fitBoundsOnLoad
        fitBoundsOnUpdate
        points={data}
        longitudeExtractor={m => m.lng}
        latitudeExtractor={m => m.lat}
        intensityExtractor={m => m.value}
      />
    </Map>
  );
};

//export default HeatmapExample;


export default App;
