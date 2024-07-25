import {
  Text,
  View,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {collections, addDoc} from 'firebase/firestore';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import {app, db} from '../../firebase';
import { doc, setDoc } from "firebase/firestore"; 
import {useState} from 'react';
function SignUpScreen({navigation}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState({});
  const auth = getAuth(app);
  const handleSignUpValidation = (name, value) => {
    setFormData({...formData, [name]: value});
  };
  const handleSignUp = () => {
    // console.log('rdhfj');
    console.log(formData);
    const errors = {};
    if (!formData.firstName) {
      errors.firstName = 'Please enter your first name';
    }
    if (!formData.lastName) {
      errors.lastName = 'Please enter your last name';
    }
    if (!formData.email) {
      errors.email = 'Please enter your email address';
    }
    if (!formData.password) {
      errors.password = 'Please enter your password';
    }
    setError(errors);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then(async userCredential => {
        const user = userCredential.user;
        console.log(user);
        if (user) {
          await setDoc(doc(db, 'collections',user.uid), {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
          });
          navigation.navigate('Login');
        }
      })
      .catch(error => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <ScrollView>
      <View className="container mx-auto w-[90%]">
        <Image source={require('../../assets/images/logo.png')} />

        <View className="flex flex-col gap-2 justify-between">
        <TextInput
            className="border border-gray-200 rounded-full py-[25px] pl-5 bg-[#f4f4f4]"
            placeholder="First Name"
            onChangeText={text=>handleSignUpValidation('firstName',text)}
          />
          <Text className="text-red-500 font-bold">
          {error.firstName && error.firstName}
        </Text>
          <TextInput
            className="border border-gray-200 rounded-full py-[25px] pl-5 bg-[#f4f4f4]"
            placeholder="Last Name"
            onChangeText={text=>handleSignUpValidation('lastName',text)}
          />
           <Text className="text-red-500 font-bold">
          {error.lastName && error.lastName}
        </Text>
          <TextInput
            className="border border-gray-200 rounded-full py-[25px] pl-5 bg-[#f4f4f4]"
            placeholder="Email Address"
            onChangeText={text => handleSignUpValidation('email', text)}
          />
          <Text className="text-red-500 font-bold">
          {error.email && error.email}
        </Text>
          <TextInput
            className="border border-gray-200 rounded-full py-[25px] pl-5 bg-[#f4f4f4]"
            placeholder="Password"
            onChangeText={text => handleSignUpValidation('password', text)}
            secureTextEntry={true}
          />
          <Text className="text-red-500 font-bold">
          {error.password && error.password}
        </Text>
        <TouchableOpacity onPress={handleSignUp}>
          <View className="border /border-gray-200  outline outline-none rounded-full py-[25px] pl-5 bg-[#ff7356]">
            <Text className="text-white  text-2xl font-bold text-center">
              Create Account
            </Text>
          </View>
          </TouchableOpacity>
          <Text className="text-center">OR</Text>
          <View className="border border-gray-200 rounded-full py-[25px] pl-5 ">
            <Text className="text-2xl font-bold text-center">
              Sign up With Google
            </Text>
          </View>
          <Text className=" py-[25px] text-center text-2xl">
            Already Have an Account? Log In
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
export default SignUpScreen;
