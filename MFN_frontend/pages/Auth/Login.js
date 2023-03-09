
import { Link, useNavigation } from "@react-navigation/native";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TextInput,
  Button,
  Linking
} from "react-native";

const Login = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}
      showsVerticalScrollIndicator={false} >
      <ImageBackground source={require('../../assets/port-6670684_1920.jpg')}
        style={{ height: Dimensions.get('window').height / 2.5 }}>
        <View style={styles.brandView}>
          {/* <Icon name='Location-sharp'
           style={{color:'#ffffff',fontSize:100}}/> */}
          <Text style={styles.brandViewText}>MFN</Text>
        </View>
      </ImageBackground>
      <View style={styles.bottomView}>
        <View style={{ padding: 40 }}>
          <Text style={{ color: '#4632A1', fontSize: 50 }}>  Welcome  </Text>
          <Text>  Dont't have an account? </Text>
          <Text style={{ color: 'red', fontStyle: 'italic' }} onPress={() => navigation.navigate('Register')}
          >Register</Text>
          {/* form input view */}
          <View style={{ marginTop: 50 }}>
            <TextInput
              style={{ borderBottomWidth: 1, borderBottomColor: '#4632A1', paddingBottom: 10 }}
              placeholder='Email'
            />
            <TextInput
              style={{ borderBottomWidth: 1, borderBottomColor: '#4632A1', paddingBottom: 10, marginTop: 20 }}
              placeholder='Password'
            />
            <View style={{ alignItems: 'flex-end', marginTop: 20 }}>
              <Text style={{ color: 'red', fontStyle: 'italic' }}>Forgot Password?</Text>
            </View>
            <View style={{ marginTop: 50 }}>
              <Button title='Login' color='#4632A1' />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
export default Login;

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
