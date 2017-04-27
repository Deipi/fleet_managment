import React from 'react';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

const Map = withGoogleMap((props) =>{
  return(
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={13}
      defaultCenter={{lat: 19.702322, lng: -101.192190}}
      onClick={props.onMapClick}
    >
    {props.markers&&props.markers.map(marker=>(
      <Marker
        {...marker}
      />
    ))}
    </GoogleMap>
  );
});
export default Map;