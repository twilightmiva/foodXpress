import {
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Data} from '../../Data';
import {useContext,useEffect} from 'react';
import {StateContext} from '../context/state';
import { getDoc,doc } from 'firebase/firestore';
import { db } from '../../firebase';
function HomeScreen({navigation}) {
  const {currentUserId, setCurrentUserId,loggedInUser,setLoggedInUser} = useContext(StateContext);
useEffect(()=>{
   console.log( currentUserId)
  async function getUserDoc(){
    const docRef=doc(db,'collections',currentUserId);
    console.log(db);
    const docSnap=await getDoc(docRef);
    if(docSnap.exists()){
      console.timeLog('Document data:',docSnap.data())
      setLoggedInUser(docSnap.data())
    }else{

    }
  }
  getUserDoc()
},[])
  return (
    <View className="">
      <ScrollView>
        <View className="flex">
          
          <Image
            className="h-[100px] w-[100px]"
            source={require('../../assets/images/avatar.png')}
          />
          <View className="flex flex-col">
          <Text>
            Hi,{loggedInUser && loggedInUser.firstName}
          </Text>
          <Text>Let's grab your food</Text>
          </View>
        </View>
        <View>
          <TextInput
            placeholder="search for food"
            className="border border-gray-200 rounded-full bg-[#F0F0F0] mb-2 p-[20px]"
          />
        </View>
        <View>
          <Text>Food Categories</Text>
        </View>
        <View className=" flex flex-row justify-between">
          {Data.map(data => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Cartegory', {foodItems: data.foods})
                }>
                <View>
                  <Image className=" w-10 h-10" source={data.categoryImage} />
                  <Text>{data.categoryName}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View>
          <Text>Food For You</Text>
        </View>
        <View className="flex flex-row justify-around">
          <View>
            <Image
              className="h-20 w-20"
              source={require('../../assets/images/githeri.jpg')}
            />
            <Text>Githeri Curry</Text>
            <Text>20mins</Text>
            <Text>ksh 300</Text>
          </View>
          <View>
            <Image
              className="h-20 w-20"
              source={require('../../assets/images/african-pilau.jpg')}
            />
            <Text>Beef pilau</Text>
            <Text>20mins</Text>
            <Text>Ksh 300</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default HomeScreen;
