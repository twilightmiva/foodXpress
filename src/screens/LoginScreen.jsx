import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {useState} from 'react';
import { useContext } from 'react';
import {StateContext} from '../context/state';
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth';
function LoginScreen({navigation}) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const {currentUserId,setCurrentUserId}=useContext(StateContext)
  const [error, setErrorMessage] = useState({});
  const handleLoginValidation = (name, value) => {
    setFormData({...formData, [name]: value});
  };
  const handleLogin = async () => {
    if (formData.email === '' || formData.password === '') {
      setErrorMessage('Kindly fill all the fields.');
      return;
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          setCurrentUserId(user.uid);
        
          navigation.navigate('Home');
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorMessage); 
      });
  };

  return (
    <View className="container mx-auto w-[90%]">
      <Image source={require('../../assets/images/logo.png')} />
      <View className="flex flex-col mb-2 ">
        <Text className="text-red-500 font-bold">
          {error.email&&error.email}
        </Text>
        <TextInput
          placeholder="Email Address"
          className="border border-gray-200 rounded-full bg-[#F0F0F0] mb-2 p-[20px]"
          onChangeText={text => handleLoginValidation('email', text)}
        />
        <Text className="text-red-500 font-bold"></Text>
        <TextInput
          placeholder="Password"
          className="border border-gray-200 rounded-full bg-[#F0F0F0] mb-2 p-[20px]"
          onChangeText={text => handleLoginValidation('password', text)}
          secureTextEntry={true}
        />
        <Text className="text-red-500 font-bold"></Text>
        <TouchableOpacity on onPress={handleLogin}>
          <View className="bg-[#FF7356] p-[30px] rounded-full cursor-pointer">
            <Text className="font-bold text-white text-center text-[30px]">
              Log in
            </Text>
          </View>
        </TouchableOpacity>
        <Text className="text-center my-[10px] text-black line-through">
          OR
        </Text>
        <Text className="border border-gray-300 p-[30px] text-center font-bold text-[25px] rounded-full text-black">
          Continue With Google
        </Text>
        <Text>Dont have an Account? Sign up</Text>
      </View>
    </View>
  );
}
export default LoginScreen;





