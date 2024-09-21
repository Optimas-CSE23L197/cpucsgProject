import React, { useEffect, useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Header from '../Dashboard/Header';
import Sidebar from '../Dashboard/Sidebar';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import 'leaflet-geosearch/dist/geosearch.css';

function Mapbox() {
  const [mapInstance, setMapInstance] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [locationName, setLocationName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);

  useEffect(() => {
    const map = new Map('map', {
      center: [28.61722, 77.21000],
      zoom: 12,
    });

    const osmTileLayer = new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      subdomains: ['a', 'b', 'c'],
    });

    map.addLayer(osmTileLayer);
    setMapInstance(map);

    const provider = new OpenStreetMapProvider();
    const searchControl = new GeoSearchControl({
      provider: provider,
      style: 'bar',
      autoComplete: true,
      autoCompleteDelay: 250,
    });
    map.addControl(searchControl);

    map.on('click', handleMapClick);

    return () => {
      map.off('click', handleMapClick);
      map.remove();
    };
  }, []);

  const handleMapClick = (e) => {
    setSelectedMarker(e.latlng);
    setLocationName('');
    setProjectName('');
    setPopupVisible(true);
  };

  const addMarker = () => {
    if (selectedMarker && locationName && projectName) {
      const newMarker = {
        latlng: selectedMarker,
        name: locationName,
        project: projectName,
      };
      setMarkers((prev) => [...prev, newMarker]);

      new Marker(selectedMarker, { color: 'red' })
        .addTo(mapInstance)
        .bindPopup(`${projectName}: ${locationName}`)
        .openPopup();

      setPopupVisible(false);
    }
  };

  const deleteMarker = (latlng) => {
    setMarkers((prev) => prev.filter(marker => marker.latlng !== latlng));
    mapInstance.eachLayer(layer => {
      if (layer instanceof Marker && layer.getLatLng().equals(latlng)) {
        mapInstance.removeLayer(layer);
      }
    });
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="mapbox">
      <Header />
      <Sidebar />
      <div className="mapbox-body">
        <div id="map" className="map-container" />
        {popupVisible && (
          <div id="location-popup">
            <input
              type="text"
              placeholder="Project Name"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Location Name"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
            />
            <button onClick={addMarker}>Add Location</button>
            <button onClick={closePopup}>Cancel</button>
          </div>
        )}
        <div>
          {markers.map((marker, index) => (
            <div key={index}>
              <span>{marker.project}: {marker.name}</span>
              <button className="marker-delete-button" onClick={() => deleteMarker(marker.latlng)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mapbox;
