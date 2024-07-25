import {useContext, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {StateContext} from '../context/state';
function SingleFoodItemScreen({route, navigation}) {
  const {foodItem} = route.params;
  const {cart, setCart} = useContext(StateContext);
  console.log(foodItem);
  const [quantity, setQuantity] = useState(1);
  const increamentQuantity = () => {
    setQuantity(val => val + 1);
  };
  const decreamentQuantity = () => {
    if (quantity > 1) {
      setQuantity(val => val - 1);
    }
  };

  const addToCart = item => {
    const foodWithQuantity = {...item, quantity};
    setCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(
        foodItem => foodItem.id === item.id
      );
      if (existingItemIndex !== -1) {
        updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      }

      return [...prevCart, foodWithQuantity];
    });
  };

  return (
    <View>
      <View>
        <Image className="h-[400px] w-[400px]" source={foodItem.image} />
      </View>
      <View>
        <Text className="font-extrabold text-2xl text-black text-center py-[20px]">
          {foodItem.foodName}
        </Text>
      </View>
      <View className="flex flex-row justify-around">
        <View className="">
          <Text className="text-[#FF7356] font-bold text-2xl">
            {foodItem.price}
          </Text>
        </View>
        <View className="flex-row justify-center gap-2 shadow-lg bg-white rounded-full">
          <TouchableOpacity onPress={decreamentQuantity}>
            <Text className="bg-[#FF7356] rounded-full h-10 w-10 text-center text-white font-bold text-2xl">
              -
            </Text>
          </TouchableOpacity>

          <Text className="font-bold text-2xl">{quantity}</Text>
          <TouchableOpacity onPress={increamentQuantity}>
            <Text className="bg-[#FF7356] text-2xl rounded-full h-10 w-10 text-center text-white">
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <Text className="text-center text-grey mt-5 text-2xl">
          {foodItem.description}
        </Text>
      </View>
      <View className=" block mx-auto py-[2rem] px-7 ">
        <View>
          <TouchableOpacity onPress={() => addToCart(foodItem)}>
            <Text className="bg-[#ff7356] py-[20px] px-[65px] rounded-full text text-white text-2xl">
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
export default SingleFoodItemScreen;
