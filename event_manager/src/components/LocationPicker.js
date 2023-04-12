// export default LocationPicker;
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { useState } from 'react';
import "./LocationPicker.css";

const LocationPicker = (props) => {
  const [position, setPosition] = useState(null);
  
  const handleMapClick = (mapProps, map, event) => {
    setPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    }); 
  }
  
  const handleMarkerDrag = (mapProps, map, event) => {
    setPosition({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
  }

  const handleCancelClick = () => {
    console.log("cancel clicks");
    props.closeModal();
  }

  const handleSelectClick = () => {
    console.log("select clicks");
    props.handleLocationSelect(position);
  }

  return (
    <div className='mapModal'>
        <div className='innerMapContainer'>  
            <Map 
            google={props.google}
            zoom={15}
            initialCenter={{
                lat: 28.602427,
                lng: -81.200058
            }}
            onClick={handleMapClick}
            style={{width: '50%', height: '50%'}}
            >
            {position && <Marker 
                position={position} 
                draggable={true} 
                onDragend={handleMarkerDrag}
            />}
            </Map>
        </div>
        <div className='buttonsContainer'>
            <button className='button1' onClick={handleCancelClick}>Cancel</button>
            <button className='button2' onClick={handleSelectClick}>Select Location</button>                
        </div>
    </div>
  )   
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(LocationPicker);