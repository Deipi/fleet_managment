import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form/immutable'
import { fetchGeocercas } from '../actions/indexGeocercas';
import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';
import DrawingManager from 'react-google-maps/lib/drawing/DrawingManager';


const Mapa = withGoogleMap((props) =>{
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

 	<DrawingManager

            defaultOptions={{
              drawingControl: true,
              drawingControlOptions: {
                position: window.google.maps.ControlPosition.TOP_CENTER,
                drawingModes: ['circle', 'polygon', 'rectangle'],
              },

              circleOptions: {
                fillColor: `#ffff00`,
                fillOpacity: 0.35,
                strokeWeight: 5,
                clickable: true,
                editable: true,
                zIndex: 1,

              },
              polygonOptions: {
                    clickable: true,
                    draggable: true,
                    editable: true,
                    fillColor: '#ffff00',
                    fillOpacity: 0.35,

              },
              rectangleOptions: {
                  clickable: true,
                  draggable: true,
                  editable: true,
                  fillColor: '#ffff00',
                  fillOpacity: 0.35,
              }

            }}
            />

    </GoogleMap>

  );
});
export default Mapa;