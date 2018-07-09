import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export class MapPage extends React.Component {
  fetchPlaces(mapProps, map) {
    const {google} = mapProps;
    const service = new google.maps.places.PlacesService(map);
  }
  render() {
    return (
      <Map google={this.props.google} zoom={14} onReady={this.fetchPlaces}>
  
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Hello</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDeEYKXdSP2fILuquzzevImbFLr0D6LIWE'
})(MapPage)