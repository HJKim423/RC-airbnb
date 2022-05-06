// AIzaSyCBL0Qamvc7fEI4SHoSwnQibq0Q_pVkSgg
import React from "react";
import { GoogleMap, LoadScript} from "@react-google-maps/api";

const containerStyle = {
    width: '100%',
    height: '100%',
    // overflow:'hidden',
    // position:'fixed'
  };

const center = {
  lat: 37.487935,
  lng: 126.857758,
};

const Googlemap = () => {

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCBL0Qamvc7fEI4SHoSwnQibq0Q_pVkSgg"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={4}
      >
      
      </GoogleMap>
    </LoadScript>
  );
};

export default React.memo(Googlemap);