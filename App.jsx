import {Image, Text, TextInput, View} from 'react-native';
import {useState} from 'react';
import {slides} from './src/slide';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AllFoodItemScreen from './src/screens/AllFoodItemScreen';
import CategoryScreen from './src/screens/CategoryScreen';
import CartScreen from './src/screens/CartScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import SingleFoodItemScreen from './src/screens/SingleFoodItem';
import AppIntroSlider from 'react-native-app-intro-slider';
import ProfileScreen from './src/screens/ProfileScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {buttonLabel} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import State from './src/context/state';

const App = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  const [showStack, setShowStack] = useState(false);

  const buttonLabel = label => {
    return <Text className="text-[#ff7356]">{label}</Text>;
  };
  // const [showStack, setshowStack] = useState(false);
  function StackNavigation() {
    return (
      
      <Stack.Navigator initialRouteName="AllFoodItem">
        <Stack.Screen name="AllFoodItem" component={AllFoodItemScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="SingleFoodItem" component={SingleFoodItemScreen} />
      </Stack.Navigator>
    
    );
  }
  function TabNavigation() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="homeTab"
          component={StackNavigation}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => <Icon name='home' color="black" size={30} />
          }}
        />
        <Tab.Screen
          name="MenuTab"
          component={AllFoodItemScreen}
          options={{
            tabBarLabel: 'Menu',
            tabBarIcon: () => <Icon name='bars' color="black" size={30} />
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: () => 
              <Icon
                name='shopping-cart
            '
                color="black"
                size={30}
              />
            ,
          }}
        />
        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: () => <Icon name='user' color="black" size={30} />
          }}
        />
      </Tab.Navigator>
    );
  }
  if (!showStack) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({item}) => {
          return (
            <View className="container mx-auto">
              <View className="flex items-center p-4">
                <Image source={item.Image} />
                <Text className="font-sans font-bold text-2xl">
                  {item.title}
                </Text>
                <Text>{item.description}</Text>
              </View>
            </View>
          );
        }}
        renderNextButton={() => buttonLabel('Next')}
        renderSkipButton={() => buttonLabel('Skip')}
        renderDoneButton={() => buttonLabel('Done')}
        showSkipButton
        onSkip={() => setShowStack(true)}
        onDone={() => setShowStack(true)}
      />
    );
  }

  return (
    <State>
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
    </State>
  );
};
export default App;
