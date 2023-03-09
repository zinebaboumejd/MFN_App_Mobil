import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image} from 'react-native';
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';


export default function Maps(){
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 32.3023,
                    longitude: -9.2411,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: 32.3023,
                       longitude: -9.2411,
                    }}
                    title="My Marker"
                    description="Some description"
                    pinColor='gold'
                    draggable={true}
                    onDragEnd={(e) => console.log(e.nativeEvent.coordinate)}
                >
                    <Callout>
                        <Text>this is a Callout</Text>
                    </Callout>
                    </Marker>
                    <Circle
                        center={{   
                            latitude: 32.3023,
                            longitude: -9.2411,
                        }}
                        radius={1000}
                    />
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
