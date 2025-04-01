// import { AppleMaps, GoogleMaps } from 'expo-maps';
import MapView, { Marker } from 'react-native-maps';
import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import MapCard from '@/components/MapCard';

export default function HomeScreen() {

  const mapRef = useRef(null);

  const initialLocation = {
    latitude: 21.0495167,
    longitude: -86.8469238,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  };


  return (
    <View style={{ flex: 1 }}>
      <MapView ref={mapRef} style={{ flex: 1 }} initialRegion={initialLocation}>
        <Marker coordinate={initialLocation} title="UT" description="Universidad Tecnológica" />
      </MapView>

      <View style={styles.container}>
        <MapCard navigateTo={(lat, long) => {

          if (mapRef.current) {
            mapRef.current.animateToRegion({
              latitude: lat,
              longitude: long,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            }, 100);
          }

        }} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 100,
  },
});
