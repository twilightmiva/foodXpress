import {NavigationContainer} from '@react-navigation/native';
import {Image, View, Text} from 'react-native';
import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AppIntroSlider from 'react-native-app-intro-slider';
import {slides} from './src/slide';
import AllFoodItemScreen from './src/screens/AllFoodItemScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import CartScreen from './src/screens/CartScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SingleFoodItemScreen from './src/screens/SingleFoodItem';
import HomeScreen from './src/screens/HomeScreen';
function Navigator() {
  const Stack = createStackNavigator();
  const buttonLabel = label => {
    return <Text className="text-[#ff7356]">{label}</Text>;
  };
  return function StackNavigation() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AllFoodItem" component={AllFoodItemScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SingleFoodItem" component={SingleFoodItemScreen} />
      </Stack.Navigator>
    );
    return (
      // <AppIntroSlider
      // data={slides}
      // renderItem={({item})=>{
      //     return(
      //         <View className="container mx-auto">
      //           <View className="flex items-center p-4">
      //             <Image source={item.Image}/>
      //             <Text className="font-sans font-bold text-2xl">{item.title}</Text>
      //             <Text>{item.description}</Text>
      //             </View>
      //         </View>
      //     )
      // }}
      // renderNextButton={()=>buttonLabel('Next')}
      // renderSkipButton={()=>buttonLabel('Skip')}
      // renderDoneButton={()=>buttonLabel('Done')}
      // showSkipButton
      // />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    );
  };
}
export default Navigator;
