import { Image, Text, TouchableOpacity, View, } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
function CartegoryScreen({route,navigation}){
    const {foodItems} =route.params
    console.log(foodItems)
    return(
        <View>
    {foodItems.map((item)=>{
        return(
        <TouchableOpacity onPress={()=>navigation.navigate("SingleFoodItem",{foodItem:item})}>
            <View>
            <Text className='font-sans font-bold'>{item.foodName}</Text>
            <Text>{item.description}</Text>
            <Image className='h-20 w-20' source={item.image}/>
            <Text className='text-[#FF7356] text-xl'>{item.price}</Text>
            </View>
            </TouchableOpacity>
        )
    })}
</View>
    )
}export default CartegoryScreen