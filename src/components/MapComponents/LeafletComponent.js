import React, { useEffect, useState, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import '../../App.css'; // Import custom styles

const LeafletComponent = () => {
  const mapContainerRef = useRef(null);
  const map = useRef(null);

  // Define center coordinates and zoom level using useState
  const [lng] = useState(35.770); // Longitude (Austin, Texas as an example)
  const [lat] = useState(-0.924);  // Latitude
  const [zoom] = useState(11);       // Zoom level


  useEffect(() => {
    // Initialize the map
    map.current = L.map(mapContainerRef.current).setView([lat, lng], zoom);

    // Add OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
    }).addTo(map.current);

    // Cleanup function to remove map when component unmounts
    return () => {
      map.current.remove();
    };
  }, [lat, lng, zoom]);

  return <div className="map-container" ref={mapContainerRef} />;
};

export default LeafletComponent;
