import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  TextInput,
  Button,
  Alert
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import {firebase,db} from '../../firebase'

const SignupForm = ({navigation}) => {
  const SignupFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    username: Yup.string().required().min(2, "A valid username is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password must contain at least 6 characters"),
  });

  const getRandomProfilePicture = async() => {
    const response = await fetch('https://randomuser.me/api')
    const data = await response.json()
    return data.results[0].picture.large
  }


  const onSignup = async(email,password,username)=>{
    try {
      const authUser = await firebase.auth().createUserWithEmailAndPassword(email,password)
      

      db.collection('users').doc(authUser.user.email).set({
        owner_uid: authUser.user.uid,
        username: username,
        email: authUser.user.email,
        profile_picture: await getRandomProfilePicture(),
      })
      console.log("User added successfully")
    } catch (error) {
      Alert.alert('Sign up Failed',error.message)
    }
  }

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={(values) => {
          onSignup(values.email,values.password,values.username);
        }}
        validationSchema={SignupFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View style={[styles.inputField]}>
              <TextInput
                placeholder="Email"
                placeholderTextColor="#444"
                autoCapitalize="none"
                keyboardType="email-address"
                autoFocus={true}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View>

            <View style={styles.inputField}>
            <TextInput
                placeholder="Username"
                placeholderTextColor="#444"
                autoCapitalize="none"
                textContentType="username"
                autoFocus={true}
                onChangeText={handleChange('username')}
                onBlur={handleBlur('username')}
                value={values.username}
              />

            </View>

            <View style={styles.inputField}>
            <TextInput
                placeholder="Password"
                placeholderTextColor="#444"
                autoCapitalize="none"
                textContentType="password"
                autoFocus={true}
                secureTextEntry={true}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />

            </View>
            <Button title="Sign Up" onPress={handleSubmit} disabled={!isValid}/>
            <View style={styles.signupContainer}>
                <Text>Already have an account? </Text>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Text style={{color:'#6BB0F5'}}>Login</Text>
                </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};


const styles = StyleSheet.create({
    wrapper: {
      marginTop: 80,
    },
    inputField:  {
      borderRadius: 4,
      padding: 12,
      backgroundColor: "#FAFAFA",
      marginBottom: 10,
      borderWidth: 1,
    },
  
    
    signupContainer: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      marginTop: 50,
    },
  });

export default SignupForm;
