import React,{useState,useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import {TouchableWithoutFeedback, TouchableOpacity,StyleSheet,  ScrollView, Text, View ,Image,Button,Linking} from 'react-native';
import axios from "axios";
import { Icon } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ListItem } from 'react-native-elements'
import iconphon from '../assets/telephone-call.png'
import iconemail from '../assets/email.png'
import adresse from '../assets/pin.png'


export default function ListData({navigation}) {

    const [markers, setMarkers] = useState([]);
    useEffect(() => {
      axios
        .get('http://192.168.9.46:9000/societes/getSociete')
        .then((res) => {
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

    const makePhoneCall = (phoneNumber) => {
        Linking.openURL(`tel:${phoneNumber}`);
      };

  return (
    <ScrollView>
    <View >
 
{
    markers.map((l, i) => (
        <ListItem style={styles.list} key={i} bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{l.nom}</ListItem.Title>
                {/* <ListItem.Subtitle>{l.adresse}</ListItem.Subtitle> */}
                <View>
                    <View>
                    <Image source={adresse} style={styles.image} />
                    <Text style={styles.text}>{l.adresse}</Text>
                    </View>
   
    <TouchableOpacity onPress={() => makePhoneCall(l.tel)}>  
<View>
<Image source={iconphon} style={styles.image} />
    <Text style={styles.text}>{l.tel}</Text>
    {/* iconr puor appelle */}
  
    </View>
</TouchableOpacity>
<View>
<Image source={iconemail} style={styles.image} />
    <Text style={styles.text}>{l.email}</Text>
    </View>
                </View>
            </ListItem.Content>
        </ListItem>
    ))
}
    </View>
    </ScrollView>
  );
          }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
//   style list

    list:{
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text:{
        color: '#000',
        fontSize: 15,
        padding:10,
        margin:10
    },
    image:{
        // style pour afficher image en droit tel
        width: 20,
        height: 20,
   position:'absolute',
    left:0,
    top:18,
    bottom:0,
    margin:0

   

    }



 
});