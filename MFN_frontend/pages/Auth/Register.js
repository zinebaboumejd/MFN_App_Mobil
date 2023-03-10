import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";

const Register = ({ navigation, route }) => {
  const navigate = useNavigation();
if(
  route.params && route.params.pin
){
  var localisation = [
    route.params.pin.latitude,
    route.params.pin.longitude
  ];
}
else{
  var localisation = [0,0]
}
console.log("localisation []:",localisation)

  const [data, setData] = useState({
    nom: "",
    ice: "",
    telephone: "",
    adresse: "",
    localisation: localisation,
    email:"",
    password:""
  });
  
  const handleChange = (name, value) => {
    setData({ ...data, [name]: value });
  };
  const handleSubmit = () => {
    console.log(data);
  };

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#fff" }}
      showsVerticalScrollIndicator={false}
    >
      <ImageBackground
        source={require("../../assets/port-6670684_1920.jpg")}
        style={{ height: Dimensions.get("window").height / 2.5 }} >
        <View style={styles.brandView}>
          <Text style={styles.brandViewText}>MFN</Text>
        </View>
      </ImageBackground>
      <View style={styles.bottomView}>
        <View style={{ padding: 40 }}>
          {/* tester props existe ou non  */}
          {
            route.params && route.params.pin ? (
              <>
                <Text>
                  {/* afficher key pin */}
                  {route.params.pin.latitude}
                </Text>
                <Text>
                  {route.params.pin.longitude}
                </Text>
              </>
            ) : (
              <Text>no pin</Text>
            )
          }
          <Text style={{ color: "#4632A1", fontSize: 50 }}> Welcome </Text>
          <Text> Dont't have an account?</Text>
          <Text
            style={{ color: "red", fontStyle: "italic" }}
            onPress={() => navigate.navigate("Login")}
          >
            Login
          </Text>

          <View style={{ marginTop: 20 }}>
            <TextInput
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#4632A1",
                paddingBottom: 10,
                marginTop: 20,
              }}
              placeholder="Nom"
              value={data.nom}
              onChangeText={(value) => handleChange("nom", value)}
            />
            <TextInput
              style={{
                borderBottomWidth: 1,
                borderBottomColor: "#4632A1",
                paddingBottom: 10,
                marginTop: 20,
              }}
              placeholder="ICE"
              value={data.ice}
            onChangeText={(value) => handleChange("ice", value)}
            />
            <TextInput
              style={{ borderBottomWidth: 1, borderBottomColor: '#4632A1', paddingBottom: 10, marginTop: 20 }}
              placeholder='Telephone'
            onChangeText={(value) => handleChange("telephone", value)}
            />
            <TextInput
              style={{ borderBottomWidth: 1, borderBottomColor: '#4632A1', paddingBottom: 10, marginTop: 20 }}
              placeholder='Adresse'
            onChangeText={(value) => handleChange("adresse", value)}
            />
            {/* localisation map */}
            <TouchableOpacity onPress={() => navigate.navigate('Maps')}>
              <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#4632A1', borderRadius: 5, padding: 10 }}>
                <Icon name="map-marker" size={20} color="#4632A1" style={{ marginRight: 10 }} />
                {
                  route.params && route.params.pin ? (
                    <>
                      <TextInput
                        style={{ flex: 1 }}
                        placeholder='Localisation'
                        onChangeText={(value) => handleChange("localisation", value)}
                        value={
                          route.params.pin.latitude + ' ' + route.params.pin.longitude
                        }
                      />
                      <Text style={{ color: '#4632A1', fontWeight: 'bold' }}>OK</Text>
                    </>
                  ) : (
                    <Text style={{ color: '#4632A1', fontWeight: 'bold' }}>Localisation</Text>
                  )
                }
              </View>
            </TouchableOpacity>
            <TextInput
              style={{ borderBottomWidth: 1, borderBottomColor: '#4632A1', paddingBottom: 10, marginTop: 20 }}
              placeholder='Email'
            onChangeText={(value) => handleChange("email", value)}
            />
            <TextInput
              style={{ borderBottomWidth: 1, borderBottomColor: '#4632A1', paddingBottom: 10, marginTop: 20 }}
              placeholder='Password'
            onChangeText={(value) => handleChange("password", value)}
            />
            <View style={{ alignItems: 'flex-end', marginTop: 20 }}>
              <Text style={{ color: 'red', fontStyle: 'italic' }}>Forgot Password?</Text>
            </View>
            <View style={{ marginTop: 50 }}>
              <Button title='Register' color='#4632A1'
              onPress={handleSubmit}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
export default Register;

const styles = StyleSheet.create({
  brandView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  brandViewText: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  bottomView: {
    flex: 1.5,
    backgroundColor: '#ffffff',
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,

  },

})
