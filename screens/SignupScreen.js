import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import SignUpForm from '../components/signupScreen/SignupForm'


const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/timeshots.png")}
          style={{ width: 250, height: 100, resizeMode: "contain" }}
        />
      </View>
        <SignUpForm navigation={navigation}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      paddingTop: 50,
      paddingHorizontal: 12,
    },
    logoContainer: {
      alignItems: "center",
      marginTop: 60,
    },
  });
  

export default SignupScreen