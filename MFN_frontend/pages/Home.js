import React,{useState,useEffect} from 'react';
import { StyleSheet, View ,Image,Button} from 'react-native';
import MapView ,{Marker}from 'react-native-maps';
import icon from '../assets/containers.png'
import axios from "axios";

export default function Home({navigation}) {

    const [markers, setMarkers] = useState([]);
    useEffect(() => {
      axios
        .get('http://192.168.9.46:9000/societes/getSociete')
        .then((res) => {
        //   console.log(res.data);
          setMarkers(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      
    }, []);
    
    console.log("markers",markers)

    function handleGoToMaps() {
      navigation.navigate('Maps');
    }

  return (
    <View style={styles.container}>
        <View style={styles.ButtonTop}>
      <Button  title="Aller à l'écran Login" onPress={() => navigation.navigate('Login')} />
    </View>
    <View style={styles.ButtonEnd}>
      <Button  title="Aller à l'écran ListData" onPress={() => navigation.navigate('ListData')} />
    </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 32.3001,
          longitude: -9.2211,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
      >
        {markers.map((marker) => (
          <Marker
            key={marker._id}
            coordinate={{
                latitude: marker.localisation.latitude,
                longitude:marker.localisation.longitude,
            }}
            title={marker.nom}
            description={marker.adresse}
          >
            <Image source={icon} style={styles.marker} />
          </Marker>
        ))}
      </MapView>
    </View>
  );
          }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  marker: {
    width: 30,
    height: 30,
  },
  ButtonTop:{
    position: 'absolute',
    top: 50,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
  },
  ButtonEnd:{
    position: 'absolute',
    bottom: 50,
    zIndex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
  },
 
});