import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image ,Button } from 'react-native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function Maps({ navigation }) {
    const [pin, setPin] = useState({        })
   
    
    const [location, setLocation] = useState(null);
    console.log("pin ", pin)
    console.log("location ", location)

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);
            setPin({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
            })
            console.log("location", location)
        })();
    }, []);
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={location}
            >
                <Marker
                    coordinate={pin}
                    title="My Marker"
                    description="Some description"
                    pinColor='red'
                    draggable={true}
                    onDragEnd={(e) => {
                        console.log(e.nativeEvent.coordinate)
                        setPin({
                            latitude: e.nativeEvent.coordinate.latitude,
                            longitude: e.nativeEvent.coordinate.longitude,
                        })
                        // console.log("pin", pin)
                    }
                    }
                >
                    <Callout>
                        <Text>this is a Callout</Text>
                    </Callout>
                </Marker>
                <Button title="Aller à l'écran suivant" onPress={() => navigation.navigate('Register', { pin: pin })} />
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
});
