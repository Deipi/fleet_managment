import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import React, {PropTypes} from "react"
const Map = withGoogleMap((props) =>{

  return(

    <GoogleMap

      ref={props.onMapLoad}
      defaultZoom={13}
      defaultCenter={{lat: 19.702322, lng: -101.192190}}

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